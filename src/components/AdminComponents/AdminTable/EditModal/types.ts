import { IUser } from "@/interfaces/IUser";

export interface IFormValues {
  id: string;
  name: string;
  email: string;
  idNumber: string;
  rol: string;
  plan: string;
  state: string;
}

export interface IEditModalProps {
  data: IUser;
  onClose: () => void;
}
