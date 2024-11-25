"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import ICourseAdminContextProps, { ICoursesTables } from "./types";
import ICourse from "@/interfaces/ICourse";
import { deleteCourse, fetchCoursesByLanguage } from "@/services/courses/courses.service";
import useSegment from "@/hooks/useSegment";

const CoursesAdminContext = createContext<ICourseAdminContextProps | undefined>(undefined);

export const CoursesAdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [maxPages, setMaxPages] = useState<number>(0);
  const { getLastTwoSegments } = useSegment();
  const languageName = getLastTwoSegments()[0];
  const dataLimit = 5;

  const previousPage = () => page > 1 && setPage((prev) => prev - 1);
  const nextPage = () => page < maxPages && setPage((prev) => prev + 1);

  const deleteCourseById = async (id: string) => {
    try {
      await deleteCourse(id);
      setCourses((prev) => prev.filter((course) => course.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al eliminar curso");
    }
  };

  useEffect(() => {
    const fetchCoursesPageData = async () => {
      setLoading(true);
      try {
        const response: ICoursesTables = await fetchCoursesByLanguage(languageName, dataLimit);
        const { data, total } = response;
        setCourses(data);
        setMaxPages(Math.ceil(total / dataLimit));
      } catch (err) {
        setError(err instanceof Error ? `Page: ${err.message}` : "Ha ocurrido un error");
      } finally {
        setLoading(false);
      }
    };
    fetchCoursesPageData();
  }, [page, languageName]);

  return (
    <CoursesAdminContext.Provider
      value={{
        courses,
        loading,
        error,
        page,
        maxPages,
        previousPage,
        nextPage,
        deleteCourseById,
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
