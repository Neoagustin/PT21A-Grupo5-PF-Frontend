import React from "react";
import { IButtonDataProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const ButtonData: React.FC<IButtonDataProps> = ({logo, name, isActive, path}: IButtonDataProps): React.ReactElement => {

    return (

        <Link className={`${isActive ? 'bg-violet text-whitePage xl:bg-whitePage xl:text-violet' : 'bg-lightgray text-gray'} px-4 py-2 rounded-[4px] text-xs font-semibold flex items-center justify-center gap-2 sm:text-[13px] md:h-[52px] md:text-[15px] xl:bg-whitePage xl:font-normal xl:p-0`} href={`/dashboard/${path}`} >
            <FontAwesomeIcon className="w-4 h-4 sm:w-[17px] sm:h-[17px] md:w-[25px] md:h-[25px] xl:w-[22px] xl:h-[22px]" icon={logo} />
            {name}
        </Link>

    );

};

export default ButtonData;