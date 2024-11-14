import React from "react";
import { ICourseVideoIntroProps } from "./types";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import Link from "next/link";

export const CourseVideoIntro: React.FC<ICourseVideoIntroProps> = ({ videoUrl }: ICourseVideoIntroProps): React.ReactElement => {

    console.log(videoUrl)

    return (

        <div className="w-full h-[440px] shadow-md shadow-lightgray">
            <div>
                <video className="w-full h-[200px]" controls>
                    <source src="https://www.youtube.com/embed/JrorqbFNMF4?si=76z3zydM4FiHv0ka" type="video/mp4" />
                </video>
            </div>
            <div className="p-2 flex flex-col justify-between h-[240px]">
                <Subtitle label="Elije un plan para ver el curso completo" />
                <p className="text-gray text-xs font-light">Consigue este curso y muchos más de nuestros cursos mejor valorados con el Plan Gold.</p>
                <Link className="text-skyblue text-[10px] underline transition-all hover:no-underline" href='#'>Más información</Link>
                <button className="w-full h-[40px] bg-violet transition-all border-[1px] border-transparent text-whitePage text-sm font-bold hover:bg-whitePage hover:text-violet hover:border-violet">ELEGIR PLAN</button>
                <p className="text-gray font-light text-[10px]">A partir de u$d 11,99 por mes tras la prueba, cancela cuando quieras.</p>
            </div>
        </div>

    );

};

export default CourseVideoIntro;