import ICourse from "@/interfaces/ICourse";

interface ICourseAdminContextProps {
  courses: ICourse[];
  loading: boolean;
  error: string | null;
  page: number;
  maxPages: number;
  previousPage: () => void;
  nextPage: () => void;
  deleteCourseById: (id: string) => void;
}

export default ICourseAdminContextProps;
