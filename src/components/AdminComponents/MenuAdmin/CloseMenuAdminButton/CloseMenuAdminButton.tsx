import { useAdminMenu } from "@/context/AdminMenuContext/AdminMenuContext";
import React from "react";

const CloseMenuAdminButton = () => {
  const { handleClose } = useAdminMenu();
  return (
    <div className="absolute right-[42px] top-[32px]">
      <span
        onClick={handleClose}
        className="relative w-[24px] h-[24px] cursor-pointer hover:text-gray-700 transition-all duration-200"
      >
        <span className="absolute top-0 left-0 w-6 h-[2px] bg-darkgray transform rotate-45 origin-center"></span>
        <span className="absolute top-0 left-0 w-6 h-[2px] bg-darkgray transform -rotate-45 origin-center"></span>
      </span>
    </div>
  );
};

export default CloseMenuAdminButton;
