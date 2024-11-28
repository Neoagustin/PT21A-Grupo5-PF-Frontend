import { ILesson } from "@/interfaces/ILesson";

export interface ILessonsEditModalProps {
  data: ILesson;
  onClose: () => void;
}
