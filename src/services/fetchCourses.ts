import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCourses = async () => {
  try {
    const data = await axios(`${API_URL}/courses`);
    console.log(data);
  } catch (err: unknown) {
    throw new Error(err instanceof Error ? err.message : "Unknown error occurred");
  }
};
