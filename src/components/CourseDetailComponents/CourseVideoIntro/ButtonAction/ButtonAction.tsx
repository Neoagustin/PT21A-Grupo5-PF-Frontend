"use client";

import { useToken } from "@/context/TokenContext/TokenContext";
import Link from "next/link";
import React from "react";
import { IButtonActionProps } from "./types";

export const ButtonAction: React.FC<IButtonActionProps> = ({ course }: IButtonActionProps): React.ReactElement => {

    const { token } = useToken();

    const nameButton = token ? 'VER CURSO' : 'ELEGIR PLAN';

    const link = token ? `/course/${course.id}` : '/#subscriptions';

    return (

        <>
            <Link className="w-full flex justify-center items-center h-[40px] bg-violet transition-all border-[1px] border-transparent text-whitePage text-sm font-bold hover:bg-whitePage hover:text-violet hover:border-violet" href={link}>{nameButton}</Link>
        </>

    )

};