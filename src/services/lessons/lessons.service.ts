import { ILessonTables } from "@/context/Admin/LessonsAdminContext/types";
import { IUpdateLesson } from "@/interfaces/ILesson";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

export const fetchDeleteLessons = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/lessons/${id}`);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const fetchUpdateLessonById = async (id: string, lessonData: IUpdateLesson) => {
  const { title, content } = lessonData;
  try {
    const response = await axios.put(`${API_URL}/lessons/${id}`, { title, content });
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
