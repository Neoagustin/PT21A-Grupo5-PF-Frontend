import React from "react";
import { IButtonDataProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonData: React.FC<IButtonDataProps> = ({logo, name, isActive}: IButtonDataProps): React.ReactElement => {

    return (

        <button className={`px-4 py-2 rounded-[4px] text-xs font-semibold flex gap-2 ${isActive ? 'bg-violet text-whitePage' : 'bg-lightgray text-gray'}`}>
            <FontAwesomeIcon className="w-4 h-4" icon={logo} />
            {name}
        </button>

    );

};

export default ButtonData;