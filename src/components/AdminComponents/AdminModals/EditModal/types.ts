import ICourse from "@/interfaces/ICourse";
import { IUser } from "@/interfaces/IUser";

export type TDataType = "user" | "course" | "class";

export interface IEditModalProps {
  data: IUser | ICourse;
  type: TDataType;
  onClose: () => void;
}
