"use client";

import React from "react";
import { IButtonPrevNextProps } from "./types";
import { useRouter } from "next/navigation";

export const ButtonPrevNext: React.FC<IButtonPrevNextProps> = ({ lessons, courseId, classId }: IButtonPrevNextProps) => {

    const router = useRouter();

    const currentIndex = lessons.findIndex((lesson) => lesson.id === classId);

    const handlePrevious = () => currentIndex > 0 ? router.push(`/course/${courseId}/${lessons[currentIndex - 1].id}`) : null;

    const handleNext = () => currentIndex < lessons.length - 1 ? router.push(`/course/${courseId}/${lessons[currentIndex + 1].id}`) : null;

    return (

        <div className="flex justify-center gap-10">
            <button onClick={handlePrevious} disabled={currentIndex === 0} className={`px-5 py-1 text-sm font-bold border-[1px] ${currentIndex === 0 ? "border-gray text-gray cursor-not-allowed" : "border-violet text-violet hover:bg-violet hover:text-whitePage"} transition-all sm:text-base`}>ANTERIOR</button>
            <button onClick={handleNext} disabled={currentIndex === lessons.length - 1} className={`px-5 py-1 text-sm font-bold border-[1px] ${currentIndex === lessons.length - 1 ? "border-gray text-gray cursor-not-allowed" : "border-transparent text-whitePage bg-violet hover:bg-whitePage hover:text-violet hover:border-violet"} transition-all sm:text-base`}>SIGUIENTE</button>
        </div>

    );

};

export default ButtonPrevNext;