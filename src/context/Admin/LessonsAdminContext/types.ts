import { ICreateLesson, ILesson, IUpdateLesson } from "@/interfaces/ILesson";

interface ILessonAdminContextProps {
  lessons: ILesson[];
  loading: boolean;
  error: string | null;
  page: number;
  maxPages: number;
  previousPage: () => void;
  nextPage: () => void;
  deleteLessonById: (id: string) => void;
  updateLessonById: (id: string, lessonData: IUpdateLesson) => void;
  createLesson: (dataLesson: ICreateLesson) => void;
}

export interface ILessonTables {
  data: ILesson[];
  total: number;
}

export default ILessonAdminContextProps;
