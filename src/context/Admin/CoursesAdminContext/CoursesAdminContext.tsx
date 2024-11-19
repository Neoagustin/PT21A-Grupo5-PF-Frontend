"use client";

import React, { createContext, useContext, useState } from "react";
import ICourse from "@/interfaces/ICourse";
import ICourseAdminContextProps from "./types";
import { usePathname } from "next/navigation";

const CoursesAdminContext = createContext<ICourseAdminContextProps | undefined>(undefined);

export const CoursesAdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(0);
  const recordsPerPage = 10;

  const previousPage = () => page > 1 && setPage((prev) => prev - 1);
  const nextPage = () => page < maxPages && setPage((prev) => prev + 1);

  return (
    <CoursesAdminContext.Provider
      value={{
        courses,
        page,
        maxPages,
        previousPage,
        nextPage,
        loading,
        error,
      }}
    >
      {children}
    </CoursesAdminContext.Provider>
  );
};

export const useCoursesAdminContext = () => {
  const context = useContext(CoursesAdminContext);

  if (!context) {
    throw new Error("useCoursesAdminContext debe ser utilizado dentro de un CoursesAdminProvider");
  }

  return context;
};
