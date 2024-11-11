import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import ICheckListProps from "./types";

//? Función para obtener el icono y la clase correspondiente
const getIconAndClass = (desc: string) => {
  if (desc === "No recibe certificado") {
    return { icon: faCircleXmark, itemColor: "text-red" };
  }
  return { icon: faCircleCheck, itemColor: "text-green" };
};

const CheckList: React.FC<ICheckListProps> = ({ description }) => {
  return (
    <div className="flex flex-col gap-[10px] pt-[15px]">
      {description.map((desc, i) => {
        const { icon, itemColor } = getIconAndClass(desc);

        return (
          <div key={i} className="flex items-center gap-[9px]">
            <FontAwesomeIcon
              icon={icon}
              className={`w-[12px] sm:w-[13px] md:w-[14px] ${itemColor}`}
            />
            <p className="text-[12px] sm:text-[13px] md:text-[14px]">{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CheckList;
