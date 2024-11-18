import { IUserLogin } from "@/helpers/validateForms/types";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchLoginUser = async (userData: IUserLogin) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    Swal.fire({
      title: "¡Has iniciado sesión con éxito!",
      text: `¡Bienvenido, ${response.data.user.name}!`,
      icon: "success",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      Swal.fire({
        title: "¡Error al iniciar sesión!",
        text: `${err.response.data.message}`,
        icon: "error",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "¡Error desconocido!",
        text: "Ocurrió un error inesperado al iniciar sesión.",
        icon: "error",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  }
};
