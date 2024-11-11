import React from "react";
import Banner from "./Banner/Banner";
import Subtitle from "../GeneralComponents/Subtitle/Subtitle";
import CardCourse from "../GeneralComponents/CardCourse/CardCourse";
import courseData from "@/utils/courseData/CourseData";

const Home: React.FC = () => {
  return (
    <main className="mx-auto md:max-w-[860px] xl:max-w-[1200px] text-blackPage">
      <Banner />
      <div className="px-3">
        {/* TITULO Y BIENVENIDA */}
        <section className="py-9">
          <Subtitle label="Domina los idiomas que necesitas, en un solo lugar." />
          <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
            De lo básico a lo avanzado, te acompañamos en cada paso hacia tus objetivos.
          </p>
        </section>

        {/*SECCION DE LENGUAJES*/}
        <section className="pb-9">
          <Subtitle label="Lenguajes" />
          <div
            className="
          pt-6 mx-auto grid grid-cols-1 
          sm:grid-cols-3 
          md:grid-cols-3
          xl:grid-cols-4 gap-4 justify-center"
          >
            {courseData.map((course) => (
              <CardCourse
                key={course.id}
                img={course.img}
                title={course.title}
                description={course.description}
              />
            ))}
          </div>
        </section>

        {/*SECCION DE PLANES*/}
        <section className="pb-9"></section>
      </div>
    </main>
  );
};

export default Home;
