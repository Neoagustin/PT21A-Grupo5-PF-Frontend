import ILanguage from "./ILanguage";
import { ILesson } from "./ILesson";
import { IUser } from "./IUser";

export interface ICourse {
  id: string;
  title: string;
  img_url: string;
  video_url: string | null;
  specialization: string;
  general_description: string;
  brief_description: string;
  level: string;
  createdAt: string;
  language: ILanguage;
  lessons: ILesson[];
  users: IUser[];
}

export default ICourse;