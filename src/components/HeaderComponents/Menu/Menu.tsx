import React from "react";
import MenuLink from "./MenuLink/MenuLink";
import { useMenu } from "@/context/MenuContext/MenuContext";

export const Menu: React.FC = (): React.ReactElement => {
  const { menu, menuRef, handleToggleMenu, handleCloseMenu } = useMenu();

  return (
    <div className="w-[40px] h-[40px] relative" ref={menuRef}>
      <button
        onClick={handleToggleMenu}
        className={`w-[40px] h-[40px] relative transition-all duration-1000 flex justify-center items-center z-10 
                after:content-[''] after:duration-500 after:absolute after:w-[30px] after:h-[1.6px] after:bg-blackPage 
                after:transition-all after:origin-center before:content-[''] before:absolute 
                before:w-[30px] before:duration-500 before:h-[1.6px] before:bg-blackPage before:transition-all before:origin-center 
                ${
                  menu
                    ? "after:-rotate-45 after:translate-y-0 before:rotate-45 before:translate-y-0"
                    : "after:translate-y-2 before:-translate-y-2"
                }`}
      ></button>
      <div
        className={`w-[25px] h-[1.6px] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] bg-blackPage transition-all duration-300 
                ${menu ? "origin-center -translate-x-[100px] bg-transparent" : ""}`}
      ></div>
      <MenuLink menu={menu} menuRef={menuRef} handleCloseMenu={handleCloseMenu} />
    </div>
  );
};

export default Menu;
