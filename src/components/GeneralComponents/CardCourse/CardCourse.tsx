import Image from "next/image";
import React from "react";
import ICardCourseProps from "./types";
import Link from "next/link";

const CardCourse: React.FC<ICardCourseProps> = ({ course, slug }: ICardCourseProps) => {

  return (
    <Link
      href={`/language/${slug}/${course.title.toLowerCase()}`}
      className="
        mx-auto w-[80%] max-w-[360px] border border-solid border-lightgray rounded-[7px] cursor-pointer transition-all duration-300 ease-in-out 
        hover:border-[#fff0] hover:shadow-lg hover:scale-[1.02]
        sm:w-[100%] max"
    >
      <Image
        className="rounded-t-[7px] max-h-[160px] min-h-[160px]"
        src={course.img_url}
        width={500}
        height={500}
        priority
        alt="imagen de ingles"
      />
      <div className="p-2 text-center">
        <h3 className="text-[16px] font-semibold pb-2 lg:text-[18px]">{course.title}</h3>
        <p className="font-light text-gray text-[12px] md:text-[13px] lg:text-[15px] line-clamp-4">
          {course.brief_description}
        </p>
      </div>
    </Link>
  );
};

export default CardCourse;
