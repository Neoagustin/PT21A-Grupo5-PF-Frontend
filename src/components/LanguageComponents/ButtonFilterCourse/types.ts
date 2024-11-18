export interface IButtonFilterCourseProps {
    handleFilterCourses: (id: number, specialization: string) => void;
    isActive: number | null;
};