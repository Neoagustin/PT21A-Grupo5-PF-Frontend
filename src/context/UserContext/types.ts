import { IUser } from "@/interfaces/IUser";

export interface IUserContextProps {
    user: IUser | null;
    modal: boolean;
    setUser: (user: IUser) => void;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
    isTeacher: boolean;
    isAdmin: boolean;
};