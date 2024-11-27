import ICourse from "@/interfaces/ICourse";
import { ILesson } from "@/interfaces/ILesson";
import { IUser } from "@/interfaces/IUser";

export interface IEditModalHookProps {
  data: IUser | ICourse | ILesson;
}
