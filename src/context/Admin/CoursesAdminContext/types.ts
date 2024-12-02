import ICourse, { ICreateCourse, IUpdateCourse } from "@/interfaces/ICourse";

interface ICourseAdminContextProps {
  courses: ICourse[];
  loading: boolean;
  error: string | null;
  page: number;
  maxPages: number;
  previousPage: () => void;
  nextPage: () => void;
  deleteCourseById: (id: string) => void;
  updateCourseById: (id: string, courseData: IUpdateCourse) => void;
  createCourse: (dataCourse: ICreateCourse) => void;
}

export interface ICoursesTables {
  data: ICourse[];
  total: number;
}

export default ICourseAdminContextProps;
