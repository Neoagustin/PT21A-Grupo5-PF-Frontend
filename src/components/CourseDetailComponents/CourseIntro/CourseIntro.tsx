"use client";
import React, { useEffect, useState } from "react";
import { ICourseIntroProps } from "./types";
import ICourse from "@/interfaces/ICourse";
import StarRating from "../StarRating/StarRating";
import CourseVideoIntro from "../CourseVideoIntro/CourseVideoIntro";
import CourseInfo from "../CourseInfo/CourseInfo";
import { useRouter } from "next/navigation";
import { useCourses } from "@/context/CourseContext/CourseContext";

export const CourseIntro: React.FC<ICourseIntroProps> = ({
  courseDetail,
}: ICourseIntroProps) => {
  const [course, setCourse] = useState<ICourse | null>(null);
  const { courses } = useCourses();
  const router = useRouter();

  useEffect(() => {
    const findCourse = courses?.find(
      (course: ICourse) =>
        course.title.toLowerCase() === decodeURI(courseDetail)
    );
    if (!findCourse) {
      return router.push("/not-found");
    } else {
      setCourse(findCourse);
    }
  }, [courseDetail, router, courses]);

  if (!course) return null;

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold sm:text-[32px] md:text-[36px]">
        {course.title}
      </h1>
      <p className="text-gray text-sm font-light sm:text-[20px]">
        {course.brief_description}
      </p>
      <div className="flex items-center justify-between">
        <StarRating course={course} />
        <h3 className="text-gray text-xs font-medium sm:text-[14px]">
          {`${course.students.length} ${
            course.students.length !== 1 ? "estudiantes" : "estudiante"
          }`}
        </h3>
      </div>
      <div className="w-full h-[2px] bg-lightgray"></div>
      <div className="flex flex-col gap-5 sm:flex-row-reverse sm:justify-between">
        <CourseVideoIntro course={course} />
        <CourseInfo
          generalDescription={course.general_description}
          course={course}
        />
      </div>
    </div>
  );
};

export default CourseIntro;
