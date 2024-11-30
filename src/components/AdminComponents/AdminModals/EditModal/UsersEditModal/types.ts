import { IUser } from "@/interfaces/IUser";

export interface IUsersEditModalProps {
  data: IUser;
  onClose: () => void;
}
