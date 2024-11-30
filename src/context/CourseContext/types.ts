import ICourse from "@/interfaces/ICourse";

export interface ICourseContextProps {
  courses: ICourse[] | null;
  course: ICourse | null;
  setCourse: (course: ICourse) => void;
  refreshCourses: () => Promise<void>;
}
