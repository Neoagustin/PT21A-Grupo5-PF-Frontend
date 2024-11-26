"use client";

import React, { useEffect, useState } from "react";
import CardCourse from "../../GeneralComponents/CardCourse/CardCourse";
import ILanguage from "@/interfaces/ILanguage";
import useLanguages from "@/hooks/useLanguage";
import Loading from "@/components/GeneralComponents/Loading/Loading";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import Image from "next/image";
import ICourse from "@/interfaces/ICourse";
import ButtonFilterCourse from "../ButtonFilterCourse/ButtonFilterCourse";
import { courseCategory } from "@/utils/courseCategory";
import { useRouter } from "next/navigation";

const LanguageView: React.FC<{ slug: string }> = ({
  slug,
}: {
  slug: string;
}): React.ReactElement => {
  const [filterCourses, setFilterCourses] = useState<ICourse[]>([]);
  const [isActive, setIsActive] = useState<number | null>(
    courseCategory.find((category) => category.category === "todos")?.id || null
  );
  const { languages, loading } = useLanguages();
  const router = useRouter();

  const findLanguage = languages.find(
    (language: ILanguage) => slug === language.path.toLowerCase()
  );

  useEffect(() => {
    if (!loading && !findLanguage) return router.push("/not-found");

    setFilterCourses(findLanguage?.courses || []);
  }, [findLanguage, loading, router]);

  const handleFilterCourses = (id: number, specialization: string) => {
    const courses = findLanguage?.courses.filter(
      (course: ICourse) => course.specialization === specialization
    );

    if (courses) setFilterCourses(courses);
    if (specialization === "todos")
      setFilterCourses(findLanguage?.courses || []);

    setIsActive(id);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center">
      {loading ? (
        <Loading />
      ) : (
        findLanguage && (
          <div className="w-full sm:px-[16px] flex flex-col gap-16">
            <div className="flex flex-col items-center gap-[50px] sm:flex-row md:flex-row lg:flex-row xl:flex-row md:justify-center lg:justify-center xl:justify-center">
              <div className="w-full flex flex-col items-end relative sm:w-[50%]">
                <Image
                  src={findLanguage?.country_photo_url}
                  alt="languageImage"
                  className="w-[269px] h-[236px] flex-shrink-0 rounded-[20px] shadow-md shadow-gray md:w-[300px] lg:w-[345px] xl:w-[433px] md:h-[280px] lg:h-[280px] xl:h-[280px]"
                  width={269}
                  height={236}
                />
                <Image
                  src={findLanguage?.flag_url}
                  alt="languageFlag"
                  className="w-[122px] h-[70px] rounded-md absolute bottom-[-35px] left-0 flex-shrink-0 lg:left-[0px] xl:left-[80px]"
                  width={269}
                  height={236}
                />
              </div>

              <div className="flex flex-col gap-[15px] items-start sm:w-[50%]">
                <h1 className="flex-shrink-0 justify-center text-center text-[24px] font-bold leading-none text-black">
                  {findLanguage?.name}
                </h1>
                <p className="flex-shrink-0 md:w-[340px] lg:w-[393px] text-[12px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-normal leading-none text-gray">
                  {findLanguage?.general_description}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-[40px]">
              <Subtitle
                label={`¿Por qué te gustaria estudiar ${findLanguage?.name}?`}
              />
              <ButtonFilterCourse
                handleFilterCourses={handleFilterCourses}
                isActive={isActive}
              />
            </div>

            <div
              className={`min-w-full ${
                filterCourses.length !== 0 &&
                "shadow-md shadow-lightgray py-6 px-2 gap-4 mx-auto grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 justify-center"
              }`}
            >
              {findLanguage &&
                (filterCourses.length !== 0 ? (
                  filterCourses.map((course) => {
                    return (
                      <CardCourse key={course.id} course={course} slug={slug} />
                    );
                  })
                ) : (
                  <div className="flex justify-center items-center w-full h-[351px]">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      No se encontró ningún curso.
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default LanguageView;
