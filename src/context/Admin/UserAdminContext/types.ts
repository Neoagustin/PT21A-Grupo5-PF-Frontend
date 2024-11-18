import { IUser } from "@/interfaces/IUser";

interface IUserAdminContextProps {
  loading: boolean;
  error: string | null;
  users: IUser[];
  page: number;
  maxPages: number;
  previousPage: () => void;
  nextPage: () => void;
  deleteUserById: (id: string) => void;
}

export default IUserAdminContextProps;
