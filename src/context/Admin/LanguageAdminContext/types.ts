import ILanguage, { IUpdateLanguage } from "@/interfaces/ILanguage";

interface ILaguageAdminContextProps {
  loading: boolean;
  error: string | null;
  languages: ILanguage[];
  allLanguages: ILanguage[];
  page: number;
  maxPages: number;
  previousPage: () => void;
  nextPage: () => void;
  deleteLanguageById: (id: string) => void;
  updateLanguageById: (id: string, languageData: IUpdateLanguage) => void;
}

export default ILaguageAdminContextProps;
