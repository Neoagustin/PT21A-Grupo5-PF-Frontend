"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ICourseContextProps } from "./types";
import ICourse from "@/interfaces/ICourse";
import { fetchCourses } from "@/services/courses/courses.service";

const CourseContext = createContext<ICourseContextProps | null>(null);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [courses, setCourses] = useState<ICourse[] | null>(null);
  const [course, setCourse] = useState<ICourse | null>(null);

  const refreshCourses = async () => {
    const data = await fetchCourses();

    setCourses(data);
  };

  useEffect(() => {
    refreshCourses();
  }, []);

  if (!courses) return null;

  return (
    <CourseContext.Provider
      value={{ courses, course, setCourse, refreshCourses }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => {
  const context = useContext(CourseContext);

  if (context === null)
    throw new Error(
      "El contexto debe ser utilizado dentro de un CourseProvider."
    );

  return context;
};
