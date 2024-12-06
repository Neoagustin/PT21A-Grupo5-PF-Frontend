import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import React from "react";
import { ICourseInfoProps } from "./types";
import Image from "next/image";
import { ILesson } from "@/interfaces/ILesson";

export const CourseInfo: React.FC<ICourseInfoProps> = ({
  generalDescription,
  course,
}: ICourseInfoProps): React.ReactElement => {
  const cutDescription = generalDescription.split(".");

  cutDescription.pop();

  return (
    <div className="flex flex-col gap-5 sm:w-[338px] md:w-[416px] lg:w-[513px] xl:w-[852px]">
      <div className="flex flex-col gap-5">
        <Subtitle label="Lo que aprenderás" />
        <div className="grid grid-cols-2 gap-3">
          {course.lessons.map((lesson: ILesson) => (
            <p
              key={lesson.id}
              className="text-xs text-gray flex gap-3 items-center justify-between md:text-[14px] lg:text-base"
            >
              <Image
                src="/assets/icons/check.svg"
                alt="Icono del check"
                width={15}
                height={19}
              />
              {lesson.content}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Subtitle label="Descripción" />
        <div className="flex flex-col gap-5">
          {cutDescription.map((description: string) => (
            <p
              className="text-gray text-xs font-medium md:text-base lg:text-xl"
              key={description}
            >
              {description}.
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Subtitle label="Instructores" />
        <div className="flex gap-5 items-center">
          <div className="w-[80px] h-[80px] bg-gray rounded-full overflow-hidden">
            <Image
              src={course.teachers[0]?.photo}
              alt="Foto del profesor."
              width={80}
              height={80}
            />
          </div>
          <h3 className="text-gray text-sm font-semibold md:text-base">
            {course.teachers[0]?.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
