import CardVideo from "@/components/CourseComponents/CardVideo/CardVideo";
import CourseIntro from "@/components/CourseComponents/CourseIntro/CourseIntro";
import CourseLearning from "@/components/CourseComponents/CourseLearning/CourseLearning";
import React from "react";

export const Course: React.FC = (): React.ReactElement => {

    return (

        <div className="m-auto max-w-[318px] md:max-w-[860px] xl:max-w-[1200px] flex flex-col gap-10">
            <CourseIntro />
            <CardVideo />
            <CourseLearning />
        </div>

    );

};

export default Course;