"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import ILanguage, { IUpdateLanguage } from "@/interfaces/ILanguage";
import {
  deleteLanguage,
  fetchLanguages,
  fetchLanguagesPage,
  fetchUpdateLanguageById,
} from "@/services/languages/language.service";
import ILaguageAdminContextProps from "./types";
import { usePathname } from "next/navigation";

const LanguageAdminContext = createContext<ILaguageAdminContextProps | undefined>(undefined);

export const LanguageAdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [languages, setLanguages] = useState<ILanguage[]>([]);
  const [allLanguages, setAllLanguages] = useState<ILanguage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(0);
  const recordsPerPage = 5;

  const previousPage = () => page > 1 && setPage((prev) => prev - 1);
  const nextPage = () => page < maxPages && setPage((prev) => prev + 1);

  const deleteLanguageById = async (id: string) => {
    try {
      await deleteLanguage(id);
      setLanguages((prev) => prev.filter((language) => language.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al eliminar lenguaje");
    }
  };

  const updateLanguageById = async (id: string, languageData: IUpdateLanguage) => {
    try {
      const updatedLanguage = await fetchUpdateLanguageById(id, languageData);

      setLanguages((prevLanguages) =>
        prevLanguages.map((language) =>
          language.id === id ? { ...language, ...updatedLanguage } : language
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al actualizar el lenguaje");
    }
  };

  useEffect(() => {
    const fetchLanguagesList = async () => {
      try {
        const languagesList: ILanguage[] = await fetchLanguages();
        setAllLanguages(languagesList);
        setMaxPages(Math.ceil(languagesList.length / recordsPerPage));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error al obtener lenguajes");
      }
    };

    fetchLanguagesList();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [pathname]);

  useEffect(() => {
    const fetchLanguagesPageData = async () => {
      setLoading(true);
      try {
        const laguagesPage: ILanguage[] = await fetchLanguagesPage(page, recordsPerPage);
        setLanguages(laguagesPage);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ha ocurrido un error");
      } finally {
        setLoading(false);
      }
    };
    fetchLanguagesPageData();
  }, [page]);

  return (
    <LanguageAdminContext.Provider
      value={{
        languages,
        allLanguages,
        page,
        maxPages,
        previousPage,
        nextPage,
        deleteLanguageById,
        updateLanguageById,
        loading,
        error,
      }}
    >
      {children}
    </LanguageAdminContext.Provider>
  );
};

export const useLanguageAdminContext = () => {
  const context = useContext(LanguageAdminContext);

  if (!context) {
    throw new Error("useUserAdminContext debe ser utilizado dentro de un LanguageAdminProvider");
  }

  return context;
};
