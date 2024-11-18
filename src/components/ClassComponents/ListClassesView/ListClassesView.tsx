import React from "react";
import { IListClassesView } from "./types";
import { fetchCourses } from "@/services/fetchCourses";
import ICourse from "@/interfaces/ICourse";
import { ILesson } from "@/interfaces/ILesson";
import VideoClass from "../VideoClass/VideoClass";

export const ListClassesView: React.FC<IListClassesView> = async ({ courseId, classId }: IListClassesView) => {

    const courses = await fetchCourses();

    const findCourse = courses.find((course: ICourse) => course.id === courseId);

    const findLesson = findCourse.lessons.find((lesson: ILesson) => lesson.id === classId);

    return (

        <div className="mt-10">
            <VideoClass lesson={findLesson} />
        </div>

    );

};

export default ListClassesView;