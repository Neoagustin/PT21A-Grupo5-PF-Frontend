import { IUserUpdate } from "@/helpers/validateForms/types";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchUpdateUser = async (id: string, userData: IUserUpdate, token: string) => {
  try {
    const response = await axios.patch(`${API_URL}/users/${id}`, userData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    Swal.fire({
      title: "¡Datos actualizados con éxito!",
      icon: "success",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      Swal.fire({
        title: "¡Error al actualizar datos!",
        text: `${err.response.data.message}`,
        icon: "error",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "¡Error desconocido!",
        text: "Ocurrió un error inesperado durante la actualización.",
        icon: "error",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  }
};
