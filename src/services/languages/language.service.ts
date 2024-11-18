import ILanguage from "@/interfaces/ILanguage";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchLanguages = async (): Promise<ILanguage[]> => {
  try {
    const response = await axios.get(`${API_URL}/language`);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Ocurrio un error desconocido");
    }
  }
};

export const fetchLanguagesPage = async (page: number, limit: number) => {
  try {
    const response = await axios.get(`${API_URL}/language/page`, {
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

export const deleteLanguage = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/language/${id}`);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
