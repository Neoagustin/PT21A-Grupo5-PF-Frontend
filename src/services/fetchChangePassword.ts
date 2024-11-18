import { IChangePassword } from "@/helpers/validateForms/types";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchChangePassword = async (id: string, userData: IChangePassword) => {
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    Swal.fire({
      title: "¡Contraseña actualizada con éxito!",
      icon: "success",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      Swal.fire({
        title: "¡Error al actualizar la contraseña!",
        text: `${err.response.data.message}`,
        icon: "error",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "¡Error desconocido!",
        text: "Ocurrió un error inesperado.",
        icon: "error",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  }
};
