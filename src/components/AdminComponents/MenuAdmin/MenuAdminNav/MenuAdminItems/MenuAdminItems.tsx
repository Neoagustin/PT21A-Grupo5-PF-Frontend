import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import IMenuAdminItemsProps from "./types";
import { useAdminMenu } from "@/context/AdminMenuContext/AdminMenuContext";

const MenuAdminItems: React.FC<IMenuAdminItemsProps> = ({ text, href, icon, isSelected }) => {
  const { handleClose } = useAdminMenu();

  const handleDelayedClose = () => {
    setTimeout(() => {
      handleClose();
    }, 200);
  };

  return (
    <Link
      href={href}
      onClick={handleDelayedClose}
      className={`
        w-[70%] mx-auto rounded-[4px] ${
          isSelected ? "bg-lightgrayTransparent border-l-4 border-violet" : null
        } 
        hover:bg-lightgrayTransparent hover:border-l-4 hover:border-darkgray
        `}
    >
      <div className="flex items-center justify-center text-[16px] text-[#6C757D]  py-[12px] ">
        <FontAwesomeIcon icon={icon} className={`mr-2 w-[16px]`} />
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default MenuAdminItems;
