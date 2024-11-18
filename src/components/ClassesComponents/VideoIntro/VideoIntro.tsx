import React from "react";
import { IVideoIntroProps } from "./types";
import { fetchCourses } from "@/services/fetchCourses";
import ICourse from "@/interfaces/ICourse";
import ListClasses from "../ListClasses/ListClasses";

export const VideoIntro: React.FC<IVideoIntroProps> = async ({ courseId }) => {

    const courses = await fetchCourses();

    const findCourse = courses.find((course: ICourse) => course.id === courseId);

    return (

        <div className="mt-10 flex flex-col gap-5">
            <h1 className="text-lg font-bold text-center sm:text-2xl">Video Introductorio</h1>
            <video className="sm:w-[640px] sm:self-center" controls>
                <source src={findCourse.video_url || "https://www.youtube.com/embed/JrorqbFNMF4?si=76z3zydM4FiHv0ka"} type="video/mp4" />
            </video>
            <ListClasses course={findCourse} />
        </div>

    );

};

export default VideoIntro;