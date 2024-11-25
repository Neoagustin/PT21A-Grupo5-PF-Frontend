import { IUser } from "@/interfaces/IUser";

export interface IEditModalProps {
  data: IUser;
  onClose: () => void;
}
