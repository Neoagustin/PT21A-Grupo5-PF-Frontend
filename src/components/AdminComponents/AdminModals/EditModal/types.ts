import ICourse from "@/interfaces/ICourse";
import { ILesson } from "@/interfaces/ILesson";
import { IUser } from "@/interfaces/IUser";

export type TDataType = "user" | "course" | "lesson";

export interface IEditModalProps {
  data: IUser | ICourse | ILesson;
  type: TDataType;
  onClose: () => void;
}
