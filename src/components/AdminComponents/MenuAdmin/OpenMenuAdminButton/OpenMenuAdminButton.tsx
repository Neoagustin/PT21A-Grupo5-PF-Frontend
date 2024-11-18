import { useAdminMenu } from "@/context/AdminMenuContext/AdminMenuContext";
import React from "react";

const OpenMenuAdminButton = () => {
  const { handleOpen } = useAdminMenu();
  return (
    <button
      onClick={handleOpen}
      className="absolute top-4 left-2 z-0 flex flex-col items-center justify-center w-10 h-10 transition-all duration-300"
    >
      <span className="block w-6 h-0.5 bg-darkgray rounded-sm transform transition duration-300 ease-in-out"></span>
      <span className="block w-6 h-0.5 bg-darkgray rounded-sm transform transition duration-300 ease-in-out mt-1.5"></span>
      <span className="block w-6 h-0.5 bg-darkgray rounded-sm transform transition duration-300 ease-in-out mt-1.5"></span>
    </button>
  );
};

export default OpenMenuAdminButton;
