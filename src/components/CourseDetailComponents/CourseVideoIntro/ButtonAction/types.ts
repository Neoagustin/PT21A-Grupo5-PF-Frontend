import ICourse from "@/interfaces/ICourse";
import { IUser } from "@/interfaces/IUser";

export interface IButtonActionProps {
  course: ICourse;
  token: string | null;
  user: IUser | null;
  setUser: (user: IUser) => void;
}
