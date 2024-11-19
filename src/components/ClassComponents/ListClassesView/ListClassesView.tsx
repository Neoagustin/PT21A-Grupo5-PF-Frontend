import React from "react";
import { IListClassesView } from "./types";
import { fetchCourses } from "@/services/fetchCourses";
import ICourse from "@/interfaces/ICourse";
import { ILesson } from "@/interfaces/ILesson";
import VideoClass from "../VideoClass/VideoClass";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const ListClassesView: React.FC<IListClassesView> = async ({ courseId, classId }: IListClassesView) => {

    const courses = await fetchCourses();

    const findCourse = courses.find((course: ICourse) => course.id === courseId);

    const findLesson = findCourse.lessons.find((lesson: ILesson) => lesson.id === classId);

    return (

        <div className="mt-10 flex flex-col gap-5 xl:flex-row-reverse xl:justify-between">
            <VideoClass lesson={findLesson} lessons={findCourse.lessons} courseId={courseId} classId={classId} />
            <div className="flex flex-col gap-5">
                <div>
                    <Subtitle label="Clases" />
                    <div className="w-full h-[1px] bg-blackPage"></div>
                </div>
                <div className="flex flex-col gap-5">
                    {
                        findCourse.lessons.map((lesson: ILesson, i: number) => (
                            <Link className={`h-[62px] shadow-md shadow-lightgray flex items-center p-3 gap-3 ${findLesson.id === lesson.id ? 'bg-violetTransparent' : 'bg-whitePage'}`} href={`/course/${courseId}/${lesson.id}`} key={lesson.id}>
                                <FontAwesomeIcon className="text-violet" icon={faPlay} />
                                <h3 className="text-[10px] font-bold sm:text-base">Clase {i + 1}:</h3>
                                <h4 className="text-[10px] text-gray sm:text-sm md:text-base">{lesson.title}</h4>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>

    );

};

export default ListClassesView;