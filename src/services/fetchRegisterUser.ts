import { IUserRegister } from "@/helpers/validateForms/types";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchRegisterUser = async (userData: IUserRegister) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/signup`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    Swal.fire({
      title: "¡Usuario registrado con éxito!",
      icon: "success",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    return response.data;
  } catch (err: unknown) {
    console.log(err);
    if (axios.isAxiosError(err) && err.response) {
      Swal.fire({
        title: "¡Error al registrarse!",
        text: `${err.response.data.message}`,
        icon: "error",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "¡Error desconocido!",
        text: "Ocurrió un error inesperado durante el registro.",
        icon: "error",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  }
};

export const fetchCodeVerifyEmail = async (email: string, code: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/verify-email`, {
      email,
      code,
    });

    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data.message || "Error en la solicitud.");
    }
    throw new Error("Ha ocurrido un error desconocido.");
  }
};
