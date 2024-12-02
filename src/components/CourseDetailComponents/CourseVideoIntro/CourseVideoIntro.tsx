"use client";
import React from "react";
import { ICourseVideoIntroProps } from "./types";
import Link from "next/link";
import { ButtonAction } from "./ButtonAction/ButtonAction";
import { useToken } from "@/context/TokenContext/TokenContext";
import { useUser } from "@/context/UserContext/UserContext";

export const CourseVideoIntro: React.FC<ICourseVideoIntroProps> = ({
  course,
}: ICourseVideoIntroProps): React.ReactElement => {
  const { token } = useToken();
  const { user, setUser } = useUser();
  return (
    <div
      className={`w-full flex flex-col h-full shadow-md shadow-lightgray sm:w-[238px] sm:sticky sm:top-[117.6px] md:max-h-[480px] md:w-[293px] md:top-[127px]`}
    >
      <div>
        <video className="w-full h-[200px]" controls>
          <source
            src={
              course.video_url ||
              "https://www.youtube.com/embed/JrorqbFNMF4?si=76z3zydM4FiHv0ka"
            }
            type="video/mp4"
          />
        </video>
      </div>
      {user?.role !== "admin" && user?.role !== 'teacher' ? (
        <div className="p-2 flex flex-col justify-between gap-3">
          <h3 className="text-sm font-bold sm:text-[14px] md:text-base lg:text-xl">
            {token && user?.membership.subscription.name === "Standard"
              ? "Elije hasta dos cursos con el plan básico"
              : user?.membership.subscription.name === "Premium" ||
                user?.membership.subscription.name === "Pro"
              ? "Inscribete en el curso para comenzar"
              : "Elije un plan para ver el curso completo"}
          </h3>
          <p className="text-gray text-xs font-light">
            Consigue este curso y muchos más de nuestros cursos mejor valorados
            con el Plan Premium o Pro.
          </p>
          <Link
            className="text-skyblue text-[10px] underline transition-all hover:no-underline sm:text-xs md:text-[14px]"
            href="#"
          >
            Más información
          </Link>
          <ButtonAction
            course={course}
            token={token}
            user={user}
            setUser={setUser}
          />
          <p className="text-gray font-light text-[10px] text-center md:text-xs">
            A partir de u$d 9,99 por mes tras la prueba, cancela cuando quieras.
          </p>
        </div>
      ) : (
        <div className="p-2 flex flex-col justify-between gap-5">
          <ButtonAction
            course={course}
            token={token}
            user={user}
            setUser={setUser}
          />
        </div>
      )}
    </div>
  );
};

export default CourseVideoIntro;
