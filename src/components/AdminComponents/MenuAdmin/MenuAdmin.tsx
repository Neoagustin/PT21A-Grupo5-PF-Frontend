import LogoHeader from "@/components/HeaderComponents/LogoHeader/LogoHeader";
import {
  faArrowRightFromBracket,
  faBookAtlas,
  faUserGraduate,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import MenuAdminItems from "./MenuAdminItems/MenuAdminItems";

const MenuAdmin = () => {
  return (
    <div className="shadow-[2px_2px_8px_4px_rgba(0,0,0,0.10)] h-[100vh] w-[330px] p-[20px] pl-0">
      <div className="pl-[20px] mt-10">
        <LogoHeader label="Admin" animation={false} />
      </div>

      <nav className="flex flex-col gap-[12px] mt-8">
        <MenuAdminItems text="Alumnos" href="#" icon={faUserGraduate} isSelected={true} />
        <MenuAdminItems text="Profesores" href="#" icon={faUserTie} isSelected={false} />
        <MenuAdminItems text="Cursos" href="#" icon={faBookAtlas} isSelected={false} />
        <MenuAdminItems
          text="Salir del admin"
          href="#"
          icon={faArrowRightFromBracket}
          isSelected={false}
        />
      </nav>
    </div>
  );
};

export default MenuAdmin;
