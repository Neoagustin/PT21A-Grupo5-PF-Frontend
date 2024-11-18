import React from "react";
import { IVideoClass } from "./types";
import ButtonPrevNext from "@/components/ClassesComponents/VideoIntro/ButtonPrevNext/ButtonPrevNext";

export const VideoClass: React.FC<IVideoClass> = ({ lesson }: IVideoClass) => {

    return (

        <div>
            <h1>{lesson.title}</h1>
            <video className="sm:w-[640px] sm:self-center" controls>
                <source src={lesson.video_url || "https://www.youtube.com/embed/JrorqbFNMF4?si=76z3zydM4FiHv0ka"} type="video/mp4" />
            </video>
            <ButtonPrevNext />
        </div>

    );

};

export default VideoClass;