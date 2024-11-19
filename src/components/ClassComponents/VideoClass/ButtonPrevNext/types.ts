import { ILesson } from "@/interfaces/ILesson";

export interface IButtonPrevNextProps {
    lessons: ILesson[];
    courseId: string;
    classId: string;
};