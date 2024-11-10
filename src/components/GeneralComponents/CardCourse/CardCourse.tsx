import Image from "next/image";
import React from "react";
import ICardCourseProps from "./types";

const CardCourse: React.FC<ICardCourseProps> = ({ img, title, description }) => {
  return (
    <div
      className="
      mx-auto w-[80%] max-w-[280px] 
      border border-solid border-lightgray rounded-[7px]
      sm:w-[100%] max
    "
    >
      <Image
        className="rounded-t-[7px]"
        src={img}
        width={500}
        height={500}
        alt="imagen de ingles"
      />
      <div className="p-2 text-center">
        <h3 className="text-[16px] font-semibold pb-2 lg:text-[18px]">{title}</h3>
        <p className="text-[12px] md:text-[13px] lg:text-[15px]">{description}</p>
      </div>
    </div>
  );
};

export default CardCourse;
