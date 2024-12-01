import axios from "axios";
import Swal from "sweetalert2";
import ICourse, { IUpdateCourse } from "@/interfaces/ICourse";
import { ICoursesTables } from "@/context/Admin/CoursesAdminContext/types";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses/page`);

    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const fetchCreateCourse = async (
  dataCourse: ICourse
): Promise<ICoursesTables> => {
  try {
    const {
      title,
      language,
      specialization,
      level,
      general_description,
      brief_description,
    } = dataCourse;
    const response = await axios.post(`${API_URL}/courses`, {
      title,
      language,
      specialization,
      level,
      general_description,
      brief_description,
    });
    return response.data;
  } catch (err: unknown) {
    console.log(err);

    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Ocurrio un error desconocido");
    }
  }
};

export const fetchCoursesByLanguage = async (
  language: string,
  limit: number
): Promise<ICoursesTables> => {
  try {
    const response = await axios.get(`${API_URL}/courses/filter`, {
      params: { language, limit },
    });
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Ocurrio un error desconocido");
    }
  }
};

export const fetchCoursesPage = async (
  page: number,
  limit: number
): Promise<ICourse[]> => {
  try {
    const response = await axios.get(`${API_URL}/courses/page`, {
      params: { page, limit },
    });
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Ocurrio un error desconocido");
    }
  }
};

export const fetchGetCourseById = async (id: string): Promise<ICourse> => {
  try {
    const response = await axios.get(`${API_URL}/courses/${id}`);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Ocurrio un error desconocido");
    }
  }
};

export const fetchUpdateCourseById = async (
  id: string,
  courseData: IUpdateCourse
) => {
  try {
    const {
      title,
      specialization,
      level,
      general_description,
      brief_description,
    } = courseData;
    const response = await axios.patch(`${API_URL}/courses/${id}`, {
      title,
      specialization,
      level,
      general_description,
      brief_description,
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

export const deleteCourse = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/course/${id}`);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const fetchCourseRating = async (
  courseId: string,
  userId: string,
  stars: number
) => {
  try {
    const response = await axios.post(`${API_URL}/courses/${courseId}/rate`, {
      userId,
      stars,
    });

    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw Swal.fire({
        title: "¡Error al votar!",
        text: "Ya has votado.",
        icon: "info",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      throw new Error("Error desconocido.");
    }
  }
};
