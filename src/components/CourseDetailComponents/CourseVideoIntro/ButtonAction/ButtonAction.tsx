import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IButtonActionProps } from "./types";
import ICourse from "@/interfaces/ICourse";
import { fetchUserInscriptionCourse } from "@/services/users/users.service";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export const ButtonAction: React.FC<IButtonActionProps> = ({
  course,
  token,
  user,
  setUser,
}: IButtonActionProps) => {
  const [nameButton, setNameButton] = useState<string>("");

  useEffect(() => {
    const changeNameButton = !token
      ? "ELEGIR PLAN"
      : (token && user?.role === "admin") ||
        (user &&
          course.id ===
            user.courses.find(
              (findCourse: ICourse) => findCourse.id === course.id
            )?.id)
      ? "VER CURSO"
      : "INSCRIBIRSE";

    setNameButton(changeNameButton);
  }, [course, token, user]);
  if (!user) return null;
  const link = token ? `/course/${course.id}` : "/#subscriptions";

  const handleInscriptionUser = async (userId: string, courseId: string) => {
    if (
      user.membership.subscription.name === "Standard" &&
      user.courses.length >= 2
    )
      return Swal.fire({
        title: "¡Error al inscribirse al curso!",
        text: `Actualiza tu plan para obtener más cursos.`,
        icon: "error",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    await fetchUserInscriptionCourse(userId, courseId);
    const updateUser = {
      ...user,
      courses: [...user.courses, course],
    };
    setUser(updateUser);
    localStorage.setItem("userData", JSON.stringify(updateUser));
    Cookies.set("userData", JSON.stringify(updateUser));
    Swal.fire({
      title: "¡Te has inscripto al curso con éxito!",
      icon: "success",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };
  return (
    <>
      {nameButton === "VER CURSO" ? (
        <Link
          className="w-full flex justify-center items-center h-[40px] bg-violet transition-all border-[1px] border-transparent text-whitePage text-sm font-bold hover:bg-whitePage hover:text-violet hover:border-violet"
          href={link}
        >
          {nameButton}
        </Link>
      ) : (
        <button
          onClick={() => handleInscriptionUser(user?.id, course.id)}
          className="w-full flex justify-center items-center h-[40px] bg-violet transition-all border-[1px] border-transparent text-whitePage text-sm font-bold hover:bg-whitePage hover:text-violet hover:border-violet"
        >
          {nameButton}
        </button>
      )}
    </>
  );
};
