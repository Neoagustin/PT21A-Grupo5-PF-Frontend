"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import ICourseAdminContextProps, { ICoursesTables } from "./types";
import ICourse, { ICreateCourse, IUpdateCourse } from "@/interfaces/ICourse";
import {
  deleteCourse,
  fetchCoursesByLanguage,
  fetchCreateCourse,
  fetchUpdateCourseById,
} from "@/services/courses/courses.service";
import useSegment from "@/hooks/useSegment";
import { useToken } from "@/context/TokenContext/TokenContext";

const CoursesAdminContext = createContext<ICourseAdminContextProps | undefined>(undefined);

export const CoursesAdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [maxPages, setMaxPages] = useState<number>(0);
  const { getLastTwoSegments } = useSegment();
  const languageName = getLastTwoSegments()[0];
  const { token } = useToken();
  const dataLimit = 5;

  if (!token) throw new Error("Token inexistente");

  const previousPage = () => page > 1 && setPage((prev) => prev - 1);
  const nextPage = () => page < maxPages && setPage((prev) => prev + 1);

  const createCourse = async (dataCourse: ICreateCourse) => {
    try {
      await fetchCreateCourse(dataCourse, token);
      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al actualizar el curso");
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

  const deleteCourseById = async (id: string) => {
    try {
      await deleteCourse(id, token);
      setCourses((prev) => prev.filter((course) => course.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al eliminar curso");
    }
  };

  const updateCourseById = async (id: string, courseData: IUpdateCourse) => {
    try {
      const updatedCourse = await fetchUpdateCourseById(id, courseData, token);

      setCourses((prevCourses) =>
        prevCourses.map((course) => (course.id === id ? { ...course, ...updatedCourse } : course))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al actualizar el curso");
    }
  };

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
        updateCourseById,
        createCourse,
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
