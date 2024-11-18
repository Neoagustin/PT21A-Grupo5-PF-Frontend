import React from "react";
import ListClassesView from "@/components/ClassComponents/ListClassesView/ListClassesView";

interface IClassIdProps {
    params: {
        courseId: string;
        classId: string;
    };
}

export const ClassId: React.FC<IClassIdProps> = ({ params }: IClassIdProps) => {

    const {courseId, classId} = params;

    return (

        <div className="m-auto max-w-[318px] sm:max-w-[640px] sm:px-4 md:max-w-[860px] xl:max-w-[1200px]">
            <ListClassesView courseId={courseId} classId={classId} />
        </div>

    );

};

export default ClassId;