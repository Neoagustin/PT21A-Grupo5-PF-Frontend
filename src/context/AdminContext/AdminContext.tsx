"use client";

import React, { createContext, useContext, useMemo } from "react";
import IAdminContextProps from "./types";
import useSegment from "@/hooks/useSegment";

const AdminContext = createContext<IAdminContextProps | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { segment, getLastTwoSegments } = useSegment();

  const capitalize = (text: string): string => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const getTitle = useMemo(() => {
    if (segment === "students") return "Alumnos";
    if (segment === "teachers") return "Profesores";
    if (segment === "languages") return "Lenguajes";
    if (segment === "courses") {
      const [language] = getLastTwoSegments();
      if (!language) return "Cursos";
      const decodedLanguage = decodeURIComponent(language);
      return `Cursos de ${capitalize(decodedLanguage)}`;
    }
    return "Admin";
  }, [segment, getLastTwoSegments]);

  return (
    <AdminContext.Provider
      value={{
        title: getTitle,
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
