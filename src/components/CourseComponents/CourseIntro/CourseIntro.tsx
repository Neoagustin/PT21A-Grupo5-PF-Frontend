import React from "react";
import StarRating from "../StarRating/StarRating";

export const CourseIntro: React.FC = (): React.ReactElement => {

    return (

        <div className="flex flex-col gap-10">
            <h1 className="font-bold text-lg">Inglés para Viajeros: Domina el Idioma en tus Aventuras</h1>
            <p className="text-gray text-sm font-light">"Aprende inglés esencial para viajar: frases clave y vocabulario para comunicarte con confianza en tus aventuras."</p>
            <div className="flex justify-between">
                <div className="flex items-center gap-1">
                    <h3 className="text-xs font-medium">4.4</h3>
                    <StarRating />
                </div>
                <h3 className="text-skyblue text-xs font-medium">3.396 calificaciones</h3>
                <h3 className="text-gray text-xs font-medium">17.291 estudiantes</h3>
            </div>
            <div className="w-[318px] h-[2px] bg-blackPage"></div>
        </div>

    );

};

export default CourseIntro;