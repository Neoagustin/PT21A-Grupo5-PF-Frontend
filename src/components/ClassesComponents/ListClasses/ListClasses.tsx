"use client";

import React, { useEffect, useState } from "react";
import { IListClasses } from "./types";
import { ILesson } from "@/interfaces/ILesson";
import Link from "next/link";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const ListClasses: React.FC<IListClasses> = ({ course }: IListClasses) => {

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {

        const handleResize = () => {

            setIsMobile(window.innerWidth <= 639);

        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return (

        <div className="flex flex-col gap-5">
            <Subtitle label="Clases" />
            <div className="flex flex-col gap-5">
                {
                    course.lessons.length > 0 ? (
                        course.lessons.map((lesson: ILesson, i: number) => (
                            <div className="h-[62px] shadow-md shadow-lightgray flex items-center p-3 justify-between" key={lesson.id}>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-[10px] font-bold sm:text-base">Clase {i + 1}:</h3>
                                    <h4 className="text-[10px] text-gray sm:text-sm md:text-base">{lesson.title}</h4>
                                </div>
                                <Link className="w-[35px] h-[35px] rounded-full text-whitePage bg-violet flex justify-center items-center transition-all border-[1px] border-transparent hover:bg-whitePage hover:border-violet hover:text-violet sm:w-auto sm:rounded-none sm:px-3 sm:text-whitePage sm:font-bold sm:text-sm" href={`/course/${course.id}/${lesson.id}`}>
                                    {
                                        isMobile ? (
                                            <FontAwesomeIcon icon={faPlay} />
                                        ) : (
                                            <span>VER CLASE</span>
                                        )
                                    }
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center items-center w-full h-[300px]">
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg">No se encontró ningúna clase.</p>
                        </div>
                    )
                }
            </div>
        </div>

    );

};

export default ListClasses;