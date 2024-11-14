import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import React from "react";
import { ICourseInfoProps } from "./types";
import Image from "next/image";
import { data } from "@/utils/learningInfo";

export const CourseInfo: React.FC<ICourseInfoProps> = ({ generalDescription }: ICourseInfoProps): React.ReactElement => {

    const cutDescription = generalDescription.split('.');

    return (

        <div>
            <div className="flex flex-col gap-5">
                <Subtitle label="Lo que aprenderás" />
                <div>
                    {
                        data.map((data) => (
                            <div key={data.id}>
                                {
                                    data.learning.map((learning) => (
                                        <p key={learning}>{learning}</p>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <Subtitle label="Descripción" />
                <div className="flex flex-col gap-5">
                    {
                        cutDescription.map((description: string) => (
                            <p className="text-gray text-xs font-medium" key={description}>{description}.</p>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <Subtitle label="Instructores" />
                <div className="flex gap-5 items-center">

                </div>
            </div>
        </div>

    );

};

export default CourseInfo;