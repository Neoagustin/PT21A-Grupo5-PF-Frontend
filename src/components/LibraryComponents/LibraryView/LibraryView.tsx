"use client";
import React, { useEffect, useState } from "react";
import ICourse from "@/interfaces/ICourse";
import CertificationsImage from "../CertificationsImage/CertificationsImage";
import CertificationsCardsContainer from "../CertificationsCardsContainer/CertificationsCardsContainer";
import CertificationsQuestion from "../CertificationsQuestion/CertificationsQuestion";
import EnrolledCourses from "../EnrolledCourses/EnrolledCourses";
import CertificationsPosibilities from "../CertificationsPosibilities/CertificationsPosibilities";

const LibraryView: React.FC = (): React.ReactElement => {
  const [userCourses, setUserCourses] = useState<ICourse[] | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const data = JSON.parse(localStorage.getItem("userData")!);
      setUserCourses(data.courses);
    }
  }, []);

  return (
    <>
      {/*Certifications contaier*/}

      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-[35px] items-center justify-center mt-[50px] sm:gap-[20px]">
        <CertificationsImage />
        <CertificationsCardsContainer userCourses={userCourses} />
      </div>

      {/*Courses container*/}

      <div className="flex flex-col gap-[35px] mt-[50px] items-center">
        <CertificationsQuestion />
        <EnrolledCourses userCourses={userCourses} />
      </div>

      {/*Posibilities container*/}
      <CertificationsPosibilities />
    </>
  );
};

export default LibraryView;
