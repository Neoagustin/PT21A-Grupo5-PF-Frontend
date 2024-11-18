import React from "react";
import { IButtonFilterCourseProps } from "./types";
import { courseCategory } from "@/utils/courseCategory";

export const ButtonFilterCourse: React.FC<IButtonFilterCourseProps> = ({ handleFilterCourses, isActive }: IButtonFilterCourseProps): React.ReactElement => {

    return (

        <div className="w-full flex flex-wrap justify-center gap-3 md:justify-center md:gap-5">
            {
                courseCategory.map((course) => (
                    <button onClick={() => handleFilterCourses(course.id, course.category)} className={`buttonFilterCategory ${isActive === course.id && 'buttonFilterCategoryActive'}`} key={course.id}>{course.name}</button>
                ))
            }
        </div>

    );

};

export default ButtonFilterCourse;