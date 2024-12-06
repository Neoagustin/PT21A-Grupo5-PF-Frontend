import React from "react";
import { IVideoClass } from "./types";
import ButtonPrevNext from "@/components/ClassComponents/VideoClass/ButtonPrevNext/ButtonPrevNext";

export const VideoClass: React.FC<IVideoClass> = ({
  lesson,
  lessons,
  courseId,
  classId,
}: IVideoClass) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg font-bold text-center sm:text-2xl">{lesson.title}</h1>
      <video className="sm:w-[640px] sm:self-center" controls>
        <source
          src={lesson.video || "https://www.youtube.com/embed/JrorqbFNMF4?si=76z3zydM4FiHv0ka"}
          type="video/mp4"
        />
      </video>
      <ButtonPrevNext lessons={lessons} courseId={courseId} classId={classId} />
    </div>
  );
};

export default VideoClass;
