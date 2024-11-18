import React from "react";
import { ICourseDetailProps } from "./types";
import CourseIntro from "@/components/CourseDetailComponents/CourseIntro/CourseIntro";

export const Course: React.FC<ICourseDetailProps> = ({params}: ICourseDetailProps): React.ReactElement => {

    return (

        <div className="m-auto relative max-w-[318px] sm:max-w-[640px] sm:px-4 md:max-w-[860px] xl:max-w-[1200px] flex flex-col gap-10">
            <CourseIntro courseDetail={params.courseDetail} />
        </div>

    );

};

export default Course;