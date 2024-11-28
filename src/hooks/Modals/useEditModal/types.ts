import ICourse from "@/interfaces/ICourse";
import ILanguage from "@/interfaces/ILanguage";
import { ILesson } from "@/interfaces/ILesson";
import { IUser } from "@/interfaces/IUser";

export interface IEditModalHookProps {
  data: IUser | ILanguage | ICourse | ILesson;
}
