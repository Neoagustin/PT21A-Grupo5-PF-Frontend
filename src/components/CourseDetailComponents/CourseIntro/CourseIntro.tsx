import React from "react";
import { ICourseIntroProps } from "./types";
import { fetchCourses } from "@/services/fetchCourses";
import ICourse from "@/interfaces/ICourseCard";
import StarRating from "../StarRating/StarRating";
import CourseVideoIntro from "../CourseVideoIntro/CourseVideoIntro";
import CourseInfo from "../CourseInfo/CourseInfo";

export const CourseIntro: React.FC<ICourseIntroProps> = async ({ courseDetail }: ICourseIntroProps): Promise<React.ReactElement> => {

    const courses = await fetchCourses();

    const courseName = courseDetail.split('%20').join(' ');

    const findCourse = courses.find((course: ICourse) => course.title.toLowerCase() === courseName);

    console.log(findCourse)

    return (

        <div className="mt-10 flex flex-col gap-5">
            <h1 className="font-bold">{findCourse.title}</h1>
            <p className="text-gray text-sm font-light">{findCourse.brief_description}</p>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <h3 className="text-xs font-medium">4.4</h3>
                    <StarRating />
                </div>
                <h3 className="text-skyblue text-xs font-medium">3.339 calificaciones</h3>
                <h3 className="text-gray text-xs font-medium">17.291 estudiantes</h3>
            </div>
            <div className="w-full h-[2px] bg-blackPage"></div>
            <CourseVideoIntro videoUrl={findCourse.video_url} />
            <CourseInfo generalDescription={findCourse.general_description} />
        </div>

    );

};

export default CourseIntro;