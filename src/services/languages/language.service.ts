import ILanguage, { ICreateLanguage, IUpdateLanguage } from "@/interfaces/ILanguage";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCreateLanguages = async (dataLanguage: ICreateLanguage): Promise<ILanguage[]> => {
  try {
    const {
      name,
      path,
      general_description,
      brief_description,
      image_url,
      flag_url,
      country_photo,
    } = dataLanguage;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("path", path);
    formData.append("general_description", general_description);
    formData.append("brief_description", brief_description);

    if (image_url) {
      formData.append("files", image_url);
    }
    if (flag_url) {
      formData.append("files", flag_url);
    }
    if (country_photo) {
      formData.append("files", country_photo);
    }

    const response = await axios.post(`${API_URL}/language/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
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

export const fetchDeleteLanguage = async (id: string) => {
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

export const fetchUpdateLanguageById = async (id: string, languageData: IUpdateLanguage) => {
  try {
    const { name, general_description, brief_description } = languageData;
    const response = await axios.put(`${API_URL}/language/update/${id}`, {
      name,
      general_description,
      brief_description,
    });
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
