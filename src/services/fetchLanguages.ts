import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchGetLanguage = async () => {
  try {
    const response = await axios.get(`${API_URL}/language`);

    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
