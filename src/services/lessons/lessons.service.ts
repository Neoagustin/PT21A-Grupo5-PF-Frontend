import { ILessonTables } from "@/context/Admin/LessonsAdminContext/types";
import { ICreateLesson, IUpdateLesson } from "@/interfaces/ILesson";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCreateLessons = async (dataLesson: ICreateLesson, token: string) => {
  try {
    const { title, content, course, video } = dataLesson;
    if (!token || typeof token !== "string") {
      throw new Error("El token de autenticación es inválido o no se proporcionó.");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("course", course);

    if (video instanceof File) {
      formData.append("file", video);
    } else {
      throw new Error("El video debe ser un archivo válido.");
    }

    const response = await axios.post(`${API_URL}/lessons`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err: unknown) {
    console.log(err);

    if (axios.isAxiosError(err)) {
      throw new Error(
        err.response?.data?.message ||
          `Error en la petición: ${err.response?.statusText || err.message}`
      );
    } else if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Ocurrió un error desconocido");
    }
  }
};

export const fetchLessonsByCourse = async (
  id: string,
  page: number,
  limit: number
): Promise<ILessonTables> => {
  try {
    const response = await axios.get(`${API_URL}/lessons/by-course/${id}`, {
      params: { page, limit },
    });
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const fetchDeleteLessons = async (id: string, token: string) => {
  try {
    const response = await axios.delete(`${API_URL}/lessons/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const fetchUpdateLessonById = async (
  id: string,
  lessonData: IUpdateLesson,
  token: string
) => {
  const { title, content } = lessonData;
  try {
    const response = await axios.put(
      `${API_URL}/lessons/${id}`,
      { title, content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
