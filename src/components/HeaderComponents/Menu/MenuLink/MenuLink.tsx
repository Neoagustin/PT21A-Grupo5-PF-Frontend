import React from "react";
import { IMenuLinkProps } from "./types";
import Link from "next/link";

export const MenuLink: React.FC<IMenuLinkProps> = ({
  menu,
  menuRef,
  handleCloseMenu,
}: IMenuLinkProps): React.ReactElement => {
  return (
    <nav
      ref={menuRef}
      className={`w-full fixed px-3 overflow-hidden top-[108px] left-0 bg-whitePage z-10 shadow-md shadow-lightgray transition-all duration-500 ${
        menu ? "h-[60px]" : "h-[0px]"
      } sm:px-5 sm:top-[118px] md:top-[128px]`}
    >
      <div className="w-full h-full flex mx-auto justify-between items-center gap-3 text-sm md:max-w-[860px] xl:max-w-[1200px]">
        <Link className="links" onClick={handleCloseMenu} href="/">
          Inicio
        </Link>
        <Link className="links" onClick={handleCloseMenu} href="/#languages">
          Idiomas
        </Link>
        <Link className="links" onClick={handleCloseMenu} href="/#subscriptions">
          Planes
        </Link>
        <Link className="links" onClick={handleCloseMenu} href="/contact">
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default MenuLink;
