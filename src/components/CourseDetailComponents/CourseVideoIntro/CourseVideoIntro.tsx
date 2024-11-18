import React from "react";
import { ICourseVideoIntroProps } from "./types";
import Link from "next/link";
import { ButtonAction } from "./ButtonAction/ButtonAction";

export const CourseVideoIntro: React.FC<ICourseVideoIntroProps> = ({ course }: ICourseVideoIntroProps): React.ReactElement => {

    return (

        <div className="w-full h-[440px] shadow-md shadow-lightgray sm:w-[238px] sm:sticky sm:top-[117.6px] md:w-[293px] md:top-[127px] lg:h-[480px]">
            <div>
                <video className="w-full h-[200px]" controls>
                    <source src={course.video_url || "https://www.youtube.com/embed/JrorqbFNMF4?si=76z3zydM4FiHv0ka"} type="video/mp4" />
                </video>
            </div>
            <div className="p-2 flex flex-col justify-between h-[240px] lg:h-[280px]">
                <h3 className="text-xs font-bold sm:text-[14px] md:text-base lg:text-xl">Elije un plan para ver el curso completo</h3>
                <p className="text-gray text-xs font-light">Consigue este curso y muchos más de nuestros cursos mejor valorados con el Plan Premium o Pro.</p>
                <Link className="text-skyblue text-[10px] underline transition-all hover:no-underline sm:text-xs md:text-[14px]" href='#'>Más información</Link>
                <ButtonAction course={course} />
                <p className="text-gray font-light text-[10px] text-center md:text-xs">A partir de u$d 11,99 por mes tras la prueba, cancela cuando quieras.</p>
            </div>
        </div>

    );

};

export default CourseVideoIntro;