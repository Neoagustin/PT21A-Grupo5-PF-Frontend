import axios from "axios";
import Swal from "sweetalert2";
import ICourse, { ICreateCourse, IUpdateCourse } from "@/interfaces/ICourse";
import { ICoursesTables } from "@/context/Admin/CoursesAdminContext/types";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses/page?limit=1000`);

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

export const fetchCreateCourse = async (
  dataCourse: ICreateCourse,
  token: string
): Promise<ICoursesTables> => {
  try {
    const {
      title,
      language,
      specialization,
      level,
      general_description,
      brief_description,
      img_url,
      video_url,
    } = dataCourse;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("language", language);
    formData.append("specialization", specialization);
    formData.append("level", level);
    formData.append("general_description", general_description);
    formData.append("brief_description", brief_description);

    if (img_url instanceof File) {
      formData.append("img_file", img_url);
    } else {
      throw new Error("img_url debe ser un archivo");
    }

    if (video_url instanceof File) {
      formData.append("video_file", video_url);
    } else {
      throw new Error("video_url debe ser un archivo");
    }

    const response = await axios.post(`${API_URL}/courses`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err: unknown) {
    console.error(err);

    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Ocurrió un error desconocido");
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

export const fetchCoursesPage = async (page: number, limit: number): Promise<ICourse[]> => {
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
  courseData: IUpdateCourse,
  token: string
) => {
  try {
    const {
      title,
      specialization,
      level,
      general_description,
      brief_description,
      img_url,
      video_url,
    } = courseData;

    const formData = new FormData();

    if (title) formData.append("title", title);
    if (specialization) formData.append("specialization", specialization);
    if (level) formData.append("level", level);
    if (general_description) formData.append("general_description", general_description);
    if (brief_description) formData.append("brief_description", brief_description);

    if (img_url instanceof File) {
      formData.append("img_url", img_url);
    }

    if (video_url instanceof File) {
      formData.append("video_url", video_url);
    }

    const response = await axios.put(`${API_URL}/courses/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err: unknown) {
    console.error(err);

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

export const deleteCourse = async (id: string, token: string) => {
  try {
    const response = await axios.delete(`${API_URL}/course/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);

      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const fetchCourseRating = async (
  courseId: string,
  userId: string,
  stars: number,
  token: string
) => {
  try {
    const response = await axios.post(
      `${API_URL}/courses/${courseId}/rate`,
      {
        userId,
        stars,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);

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
