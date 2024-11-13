import { IUser } from "@/interfaces/IUser";

export interface IUserContextProps {
    user: IUser | null;
    setUser: (user: IUser) => void;
};