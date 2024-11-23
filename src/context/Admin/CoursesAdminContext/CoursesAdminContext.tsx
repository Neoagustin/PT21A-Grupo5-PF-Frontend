"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import ICourseAdminContextProps from "./types";
import ICourse from "@/interfaces/ICourse";
import { deleteCourse, fetchCourses, fetchCoursesPage } from "@/services/courses/courses.service";

const CoursesAdminContext = createContext<ICourseAdminContextProps | undefined>(undefined);

export const CoursesAdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [maxPages, setMaxPages] = useState<number>(0);
  const recordsPerPage = 5;

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
    const fetchLanguagesList = async () => {
      try {
        const coursesList: ICourse[] = await fetchCourses();
        setMaxPages(Math.ceil(coursesList.length / recordsPerPage));
      } catch (err) {
        setError(err instanceof Error ? `Courses: ${err.message}` : "Error al obtener cursos");
      }
    };

    fetchLanguagesList();
  }, []);

  useEffect(() => {
    const fetchCoursesPageData = async () => {
      setLoading(true);
      try {
        const coursesPage: ICourse[] = await fetchCoursesPage(page, recordsPerPage);
        setCourses(coursesPage);
      } catch (err) {
        setError(err instanceof Error ? `Page: ${err.message}` : "Ha ocurrido un error");
      } finally {
        setLoading(false);
      }
    };
    fetchCoursesPageData();
  }, [page]);

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
