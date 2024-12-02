import { ICreateUser, IUpdateUser, IUser } from "@/interfaces/IUser";

interface IUserAdminContextProps {
  loading: boolean;
  error: string | null;
  users: IUser[];
  page: number;
  maxPages: number;
  previousPage: () => void;
  nextPage: () => void;
  deactivateUserById: (id: string) => void;
  updateUserById: (id: string, userData: IUpdateUser) => void;
  usersSubscriptions: (userId: string, subscriptionId: string) => void;
  createUser: (dataUser: ICreateUser) => void;
}

export default IUserAdminContextProps;
