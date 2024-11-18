import VideoIntroductory from "@/components/ClassesComponents/VideoIntro/VideoIntro";
import React from "react";

interface ICourseIdProps {
    params: {
        courseId: string;
    };
}

export const CourseId: React.FC<ICourseIdProps> = ({ params }: ICourseIdProps) => {

    const { courseId } = params;

    return (

        <div className="m-auto max-w-[318px] sm:max-w-[640px] sm:px-4 md:max-w-[860px] xl:max-w-[1200px]">
            <VideoIntroductory courseId={courseId} />
        </div>

    );

};

export default CourseId;