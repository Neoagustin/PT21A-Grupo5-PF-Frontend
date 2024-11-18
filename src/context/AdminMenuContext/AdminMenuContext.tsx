"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import IAdminMenuContextTypes from "./types";

const AdminMenuContext = createContext<IAdminMenuContextTypes | undefined>(undefined);

export const AdminMenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOpen = () => {
    setIsVisible(true);
  };

  return (
    <AdminMenuContext.Provider value={{ isVisible, handleClose, handleOpen }}>
      {children}
    </AdminMenuContext.Provider>
  );
};

export const useAdminMenu = (): IAdminMenuContextTypes => {
  const context = useContext(AdminMenuContext);
  if (!context) {
    throw new Error("useAdminMenu must be used within an AdminMenuProvider");
  }
  return context;
};
