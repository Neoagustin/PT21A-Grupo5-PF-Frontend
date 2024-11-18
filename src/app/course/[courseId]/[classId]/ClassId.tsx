import React from "react";
import { IClassIdProps } from "./types";
import ListClassesView from "@/components/ClassComponents/ListClassesView/ListClassesView";

export const ClassId: React.FC<IClassIdProps> = async ({ params }: IClassIdProps) => {

    const {courseId, classId} = await params;

    return (

        <div className="m-auto max-w-[318px] sm:max-w-[640px] sm:px-4 md:max-w-[860px] xl:max-w-[1200px]">
            <ListClassesView courseId={courseId} classId={classId} />
        </div>

    );

};

export default ClassId;