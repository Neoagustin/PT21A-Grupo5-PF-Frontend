import ILanguage from "./ILanguage";
import { ILesson } from "./ILesson";
import { IUser } from "./IUser";

export enum ILevel {
  ELEMENTARY = "A1 - Elementary",
  PRE_INTERMEDIATE = "A2 - Pre-intermediate",
  INTERMEDIATE = "B1 - Intermediate",
  UPPER_INTERMEDIATE = "B2 - Upper-intermediate",
  ADVANCED = "C1 - Advanced",
  PROFICIENCY = "C2 - Proficiency",
}

export enum ISpecialization {
  GENERAL = "general",
  TRAVEL = "viajes",
  CONVERSATIONAL = "conversación",
  WORK = "trabajo",
  LEGAL = "legal",
  IT = "IT",
}

export interface IUpdateCourse {
  title?: string;
  specialization?: string;
  level?: string;
}

export interface IEditCourseFormValues {
  title?: string;
  specialization?: string;
  level?: string;
}

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
  averageRating: number;
  totalRatings: number;
}

export default ICourse;
