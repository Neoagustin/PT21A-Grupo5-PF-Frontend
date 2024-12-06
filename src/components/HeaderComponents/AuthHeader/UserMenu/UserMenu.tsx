import { useUserMenu } from "@/context/UserMenuContext/UserMenuContext";
import { faUser, faSignOutAlt, faCog, faUsers, faBook } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useToken } from "@/context/TokenContext/TokenContext";
import LinkUserMenu from "./LinkUserMenu/LinkUserMenu";
import { useUser } from "@/context/UserContext/UserContext";

const UserMenu = () => {
  const { isUserModalOpen, closeMenu, menuRef } = useUserMenu();
  const { isAdmin, isTeacher } = useUser();
  const { handleLogout } = useToken();

  const logOutAndCloseMenu = () => {
    handleLogout();
    closeMenu();
  };

  return (
    <>
      {isUserModalOpen && (
        <div
          ref={menuRef}
          className="
          absolute z-10 right-0 mt-2 w-[170px] bg-white text-blackPage border border-lightgray rounded-[4px] shadow-lg p-2
          sm:w-[200px] sm:mt-[15px]
          "
        >
          <LinkUserMenu
            text={"Mi cuenta"}
            icon={faUser}
            href={`/dashboard/profile`}
            onClick={closeMenu}
          />
          {isAdmin ? (
            <LinkUserMenu
              text={"Configuración"}
              icon={faCog}
              href={"/admin/panel"}
              onClick={closeMenu}
            />
          ) : isTeacher ? (
            <LinkUserMenu
              text={"Mis Alumnos"}
              icon={faUsers}
              href={"/dashboard/profile"}
              onClick={closeMenu}
            />
          ) : (
            <LinkUserMenu
              text={"Mi Biblioteca"}
              icon={faBook}
              href={"/library"}
              onClick={closeMenu}
            />
          )}

          <LinkUserMenu
            text={"Cerrar sesión"}
            icon={faSignOutAlt}
            href={"/"}
            onClick={logOutAndCloseMenu}
          />
        </div>
      )}
    </>
  );
};

export default UserMenu;
