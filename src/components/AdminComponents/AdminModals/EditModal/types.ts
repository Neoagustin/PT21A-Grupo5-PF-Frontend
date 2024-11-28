import ICourse from "@/interfaces/ICourse";
import ILanguage from "@/interfaces/ILanguage";
import { ILesson } from "@/interfaces/ILesson";
import { IUser } from "@/interfaces/IUser";

export type TDataType = "user" | "languages" | "course" | "lesson";

export interface IEditModalProps {
  data: IUser | ILanguage | ICourse | ILesson;
  type: TDataType;
  onClose: () => void;
}
