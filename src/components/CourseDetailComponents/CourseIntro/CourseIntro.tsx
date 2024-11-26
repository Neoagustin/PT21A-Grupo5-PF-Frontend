import React from "react";
import { ICourseIntroProps } from "./types";
import { fetchCourses } from "@/services/fetchCourses";
import ICourse from "@/interfaces/ICourse";
import StarRating from "../StarRating/StarRating";
import CourseVideoIntro from "../CourseVideoIntro/CourseVideoIntro";
import CourseInfo from "../CourseInfo/CourseInfo";
import { redirect } from "next/navigation";

export const CourseIntro: React.FC<ICourseIntroProps> = async ({
  courseDetail,
}: ICourseIntroProps): Promise<React.ReactElement> => {
  const courses = await fetchCourses();

  const courseName = decodeURI(courseDetail);

  const findCourse = courses.find(
    (course: ICourse) => course.title.toLowerCase() === courseName
  );

  if (!findCourse) return redirect("/not-found");

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold sm:text-[32px] md:text-[36px]">
        {findCourse.title}
      </h1>
      <p className="text-gray text-sm font-light sm:text-[20px]">
        {findCourse.brief_description}
      </p>
      <div className="flex items-center justify-between">
        <StarRating course={findCourse} />
        <h3 className="text-gray text-xs font-medium sm:text-[14px]">
          {findCourse.students.length} estudiantes
        </h3>
      </div>
      <div className="w-full h-[2px] bg-lightgray"></div>
      <div className="flex flex-col gap-5 sm:flex-row-reverse sm:justify-between">
        <CourseVideoIntro course={findCourse} />
        <CourseInfo
          generalDescription={findCourse.general_description}
          course={findCourse}
        />
      </div>
    </div>
  );
};

export default CourseIntro;
