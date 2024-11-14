"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useRef,
  useEffect,
  useCallback,
} from "react";
import IUserMenuContextTypes from "./types";

const MenuContext = createContext<IUserMenuContextTypes | undefined>(undefined);

export const UserMenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleModal = () => setIsUserModalOpen((prev) => !prev);

  const closeMenu = useCallback(() => {
    setIsUserModalOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <MenuContext.Provider value={{ isUserModalOpen, toggleModal, closeMenu, menuRef }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useUserMenu = (): IUserMenuContextTypes => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
