import VideoIntroductory from "@/components/ClassesComponents/VideoIntro/VideoIntro";
import React from "react";
import { ICourseIdProps } from "./types";

export const CourseId: React.FC<ICourseIdProps> = async ({ params }: ICourseIdProps) => {

    const { courseId } = await params;

    return (

        <div className="m-auto max-w-[318px] sm:max-w-[640px] sm:px-4 md:max-w-[860px] xl:max-w-[1200px]">
            <VideoIntroductory courseId={courseId} />
        </div>

    );

};

export default CourseId;