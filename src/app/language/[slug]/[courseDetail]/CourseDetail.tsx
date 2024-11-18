import React from "react";
import CourseIntro from "@/components/CourseDetailComponents/CourseIntro/CourseIntro";

interface ICourseDetailProps {
    params: {
        courseDetail: string;
    };
}

export const Course: React.FC<ICourseDetailProps> = ({ params }: ICourseDetailProps) => {

    const { courseDetail } = params;

    return (

        <div className="m-auto relative max-w-[318px] sm:max-w-[640px] sm:px-4 md:max-w-[860px] xl:max-w-[1200px] flex flex-col gap-10">
            <CourseIntro courseDetail={courseDetail} />
        </div>

    );

};

export default Course;