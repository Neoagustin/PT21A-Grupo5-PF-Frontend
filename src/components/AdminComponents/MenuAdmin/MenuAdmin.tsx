"use client";
import React from "react";
import LogoHeader from "@/components/HeaderComponents/LogoHeader/LogoHeader";
import { useAdminMenu } from "@/context/AdminMenuContext/AdminMenuContext";
import MenuAdminNav from "./MenuAdminNav/MenuAdminNav";
import OpenMenuAdminButton from "./OpenMenuAdminButton/OpenMenuAdminButton";
import CloseMenuAdminButton from "./CloseMenuAdminButton/CloseMenuAdminButton";

const MenuAdmin = () => {
  const { isVisible } = useAdminMenu();

  return (
    <div>
      {!isVisible && <OpenMenuAdminButton />}

      <div
        className={`
          fixed top-0 left-0 h-[100vh] z-10 w-[100vw] bg-whitePage p-0 pl-0 shadow-[2px_2px_8px_4px_rgba(0,0,0,0.10)] 
          transition-transform duration-300 ease-in-out 
          ${isVisible ? "translate-x-0" : "-translate-x-full"}
          lg:w-[50vw]
          xl:w-[20vw]
      `}
      >
        <CloseMenuAdminButton />
        <div className="flex justify-center pt-20">
          <LogoHeader label="Admin" animation={false} />
        </div>

        <MenuAdminNav />
      </div>
    </div>
  );
};

export default MenuAdmin;
