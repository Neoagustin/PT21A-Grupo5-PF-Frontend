"use client";

import React, { createContext, useContext } from "react";
import IAdminContextProps from "./types";
import useSegment from "@/hooks/useSegment";

const AdminContext = createContext<IAdminContextProps | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { segment } = useSegment();

  const getTitle = () => {
    if (segment === "students") return "Alumnos";
    if (segment === "teachers") return "Profesores";
    if (segment === "languages") return "Lenguajes";
    return "Admin";
  };

  return (
    <AdminContext.Provider
      value={{
        title: getTitle(),
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used within an AdminProvider");
  }
  return context;
};
