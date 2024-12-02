"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import IAdminContextProps from "./types";
import useSegment from "@/hooks/useSegment";
import { fetchLanguages } from "@/services/languages/language.service";
import { fetchGetCourseById } from "@/services/courses/courses.service";
import { useSearchParams } from "next/navigation";

const AdminContext = createContext<IAdminContextProps | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { segment, getLastTwoSegments } = useSegment();
  const [title, setTitle] = useState<string>("Admin");
  const searchParams = useSearchParams();
  const courseId = searchParams.get("id");

  const capitalize = (text: string): string =>
    text ? text.charAt(0).toUpperCase() + text.slice(1) : "";

  useEffect(() => {
    let isCancelled = false;

    const resolveTitle = async () => {
      try {
        if (segment === "panel") {
          if (!isCancelled) setTitle("Panel");
          return;
        }
        if (segment === "students") {
          if (!isCancelled) setTitle("Alumnos");
          return;
        }
        if (segment === "teachers") {
          if (!isCancelled) setTitle("Profesores");
          return;
        }
        if (segment === "languages") {
          if (!isCancelled) setTitle("Lenguajes");
          return;
        }
        if (segment === "lessons") {
          if (!isCancelled) {
            if (courseId) {
              const course = await fetchGetCourseById(courseId);
              setTitle(`Clases de ${course.title}`);
            }
          }
          return;
        }
        if (segment === "courses") {
          const [language] = getLastTwoSegments();
          const decodedLanguage = decodeURIComponent(language);
          const languageTitle = capitalize(decodedLanguage);

          const languages = await fetchLanguages();
          const languagesSpanish = languages.find(
            (lang) => lang.path.toLowerCase() === languageTitle.toLowerCase()
          )?.name;

          if (!isCancelled) {
            setTitle(
              languagesSpanish ? `Cursos de ${languagesSpanish}` : "Cursos"
            );
          }
          return;
        }

        if (segment === "referrals") {
          if (!isCancelled) setTitle("Referidos");
          return;
        }

        if (!isCancelled) setTitle("Admin");
      } catch (error) {
        console.error("Error resolving title:", error);
        if (!isCancelled) setTitle("Admin");
      }
    };

    resolveTitle();

    return () => {
      isCancelled = true;
    };
  }, [segment, getLastTwoSegments, courseId]);

  return (
    <AdminContext.Provider value={{ title }}>{children}</AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used within an AdminProvider");
  }
  return context;
};
