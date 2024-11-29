"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ICreateLesson, ILesson, IUpdateLesson } from "@/interfaces/ILesson";
import {
  fetchCreateLessons,
  fetchDeleteLessons,
  fetchLessonsByCourse,
  fetchUpdateLessonById,
} from "@/services/lessons/lessons.service";
import { useSearchParams } from "next/navigation"; // Importar el hook para manejar query params
import ILessonAdminContextProps, { ILessonTables } from "./types";
import useSegment from "@/hooks/useSegment";

const LessonsAdminContext = createContext<ILessonAdminContextProps | undefined>(undefined);

export const LessonsAdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [lessons, setLessons] = useState<ILesson[]>([]);
  const [maxPages, setMaxPages] = useState<number>(0);
  const { segment } = useSegment();
  const dataLimit = 5;

  const searchParams = useSearchParams();
  const courseId = searchParams.get("id");

  const previousPage = () => page > 1 && setPage((prev) => prev - 1);
  const nextPage = () => page < maxPages && setPage((prev) => prev + 1);

  const createLesson = async (dataLesson: ICreateLesson) => {
    try {
      await fetchCreateLessons(dataLesson);
    } catch (err) {
      setError(err instanceof Error ? `Page: ${err.message}` : "Error desconocido");
    }
  };

  const deleteLessonById = async (id: string) => {
    try {
      await fetchDeleteLessons(id);
      setLessons((prev) => prev.filter((lesson) => lesson.id !== id));
    } catch (err) {
      setError(err instanceof Error ? `Page: ${err.message}` : "Error desconocido");
    }
  };

  const updateLessonById = async (id: string, lessonData: IUpdateLesson) => {
    try {
      const updatedLesson = await fetchUpdateLessonById(id, lessonData);

      setLessons((prevLessons) =>
        prevLessons.map((lesson) => (lesson.id === id ? { ...lesson, ...updatedLesson } : lesson))
      );
    } catch (err) {
      setError(err instanceof Error ? `Page: ${err.message}` : "Error desconocido");
    }
  };

  useEffect(() => {
    const fetchLessonsPageData = async () => {
      if (!courseId) {
        if (segment === "lessons") {
          window.location.reload();
          return;
        }
        return;
      }

      setLoading(true);
      try {
        const { data, total }: ILessonTables = await fetchLessonsByCourse(
          courseId,
          page,
          dataLimit
        );
        setLessons(data);
        setMaxPages(Math.ceil(total / dataLimit));
      } catch (err) {
        console.error("Error al obtener lecciones:", err);
        setError(err instanceof Error ? `Page: ${err.message}` : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchLessonsPageData();
  }, [page, courseId, segment]);

  return (
    <LessonsAdminContext.Provider
      value={{
        lessons,
        loading,
        error,
        page,
        maxPages,
        previousPage,
        nextPage,
        deleteLessonById,
        updateLessonById,
        createLesson,
      }}
    >
      {children}
    </LessonsAdminContext.Provider>
  );
};

export const useLessonsAdminContext = () => {
  const context = useContext(LessonsAdminContext);
  if (!context) {
    throw new Error("useLessonsAdminContext debe ser utilizado dentro de un LessonsAdminProvider");
  }
  return context;
};
