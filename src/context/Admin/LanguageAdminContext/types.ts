import ILanguage, { ICreateLanguage, IUpdateLanguage } from "@/interfaces/ILanguage";

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
  createLanguage: (dataLanguage: ICreateLanguage) => void;
}

export default ILaguageAdminContextProps;
