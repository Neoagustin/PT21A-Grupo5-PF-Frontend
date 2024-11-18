import ILanguage from "@/interfaces/ILanguage";
import { fetchGetLanguage } from "./fetchLanguages";

export const fetchLanguageByName = async (name: string) => {
  try {
    const languages: ILanguage[] = await fetchGetLanguage();

    const language = languages.find((language: ILanguage) => language.name.toLowerCase() === name);

    if (!language) throw new Error("Lenguaje no encontrado.");

    return language;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
