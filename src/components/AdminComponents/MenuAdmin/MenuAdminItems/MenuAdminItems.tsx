import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import IMenuAdminItemsProps from "./types";

const MenuAdminItems: React.FC<IMenuAdminItemsProps> = ({ text, href, icon, isSelected }) => {
  return (
    <Link href={href} className={`${isSelected ? "bg-lightgray" : null} `}>
      <div className="flex items-center text-[22px] pl-[40px] py-[12px] text-[#6C757D]">
        <FontAwesomeIcon icon={icon} className="mr-2 w-[22px]" />
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default MenuAdminItems;
