// "use client";
// import React, { createContext, useContext, useEffect, useState } from "react";
// import ICourseAdminContextProps from "./types";
// import ICourse from "@/interfaces/ICourse";

// const CoursesAdminContext = createContext<ICourseAdminContextProps | undefined>(undefined);

// export const CoursesAdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [page, setPage] = useState<number>(1);
//   const [courses, setCourses] = useState<ICourse[]>([]);
//   const [maxPages, setMaxPages] = useState<number>(0);
//   const recordsPerPage = 5;

//   const previousPage = () => page > 1 && setPage((prev) => prev - 1);
//   const nextPage = () => page < maxPages && setPage((prev) => prev + 1);

//   useEffect(() => {
//     const fetchLanguagesList = async () => {
//       try {
//         const coursesList: ICourses[] = await fetchLanguages();
//         setMaxPages(Math.ceil(coursesList.length / recordsPerPage));
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Error al obtener usuarios");
//       }
//     };

//     fetchLanguagesList();
//   }, []);

//   return (
//     <CoursesAdminContext.Provider
//       value={{
//         loading,
//         error,
//       }}
//     >
//       {children}
//     </CoursesAdminContext.Provider>
//   );
// };

// export const useCoursesAdminContext = () => {
//   const context = useContext(CoursesAdminContext);

//   if (!context) {
//     throw new Error("useCoursesAdminContext debe ser utilizado dentro de un CoursesAdminProvider");
//   }

//   return context;
// };
