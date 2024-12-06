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

export interface ICreateCourse {
  title: string;
  specialization: string;
  general_description: string;
  brief_description: string;
  level: string;
  language: string;
  img_url: File | null;
  video_url: File | null;
}

export interface IUpdateCourse {
  title?: string;
  specialization?: string;
  level?: string;
  general_description?: string;
  brief_description?: string;
  img_url: File | string | null;
  video_url: File | string | null;
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
  students: IUser[];
  teachers: IUser[];
  averageRating: number;
  totalRatings: number;
}

export default ICourse;
