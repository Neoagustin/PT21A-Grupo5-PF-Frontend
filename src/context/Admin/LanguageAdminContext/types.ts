import ILanguage from "@/interfaces/ILanguage";

interface ILaguageAdminContextProps {
  loading: boolean;
  error: string | null;
  languages: ILanguage[];
  page: number;
  maxPages: number;
  previousPage: () => void;
  nextPage: () => void;
  deleteLanguageById: (id: string) => void;
}

export default ILaguageAdminContextProps;
