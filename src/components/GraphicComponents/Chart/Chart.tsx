"use client";

import "../../../chartConfig";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import ICourse from "@/interfaces/ICourse";
import { useLanguageAdminContext } from "@/context/Admin/LanguageAdminContext/LanguageAdminContext";
import ILanguage from "@/interfaces/ILanguage";
import Loading from "@/components/GeneralComponents/Loading/Loading";

export const Chart: React.FC = () => {
  const { allLanguages } = useLanguageAdminContext();

  const labels = allLanguages.map((language: ILanguage) => language.name);
  const dataValues = allLanguages.map((language: ILanguage) => {
    return language.courses.reduce((total: number, course: ICourse) => {
      return total + (course?.students?.length || 0);
    }, 0);
  });

  if (allLanguages.length === 0) return <Loading />;

  const totalUsers = dataValues.reduce((sum, value) => sum + value, 0);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Estudiantes inscriptos",
        data: dataValues,
        backgroundColor: [
          "rgb(0, 123, 255)",
          "rgb(0, 0, 0)",
          "rgb(0, 200, 83)",
          "rgb(0, 91, 187)",
          "rgb(255, 0, 0)",
          "rgb(255, 193, 7)",
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: "Estudiantes inscriptos por lenguaje:",
      },
    },
    cutout: "50%",
  };

  return (
    <div className="flex justify-center items-center">
      {totalUsers !== 0 ? (
        <div className="w-[320px] h-[320px] m-auto sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px]">
          <Doughnut data={chartData} options={options} />
        </div>
      ) : (
        <p>¡No se encontró ningún usuario inscripto!</p>
      )}
    </div>
  );
};

export default Chart;
