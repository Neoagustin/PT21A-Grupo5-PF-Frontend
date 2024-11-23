import axios from "axios";
import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
