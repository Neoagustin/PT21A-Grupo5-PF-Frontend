"use client";

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { IMenuContextProps } from "./types";

const MenuContext = createContext<IMenuContextProps | null>(null);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menu, setMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = useCallback(() => {
    setMenu(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) closeMenu();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeMenu]);

  const handleToggleMenu = () => setMenu(!menu);

  const handleCloseMenu = () => setMenu(false);

  return (
    <MenuContext.Provider value={{ menu, menuRef, handleToggleMenu, handleCloseMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);

  if (context === null)
    throw new Error("El contexto debe ser utilizado dentro de un MenuProvider.");

  return context;
};
