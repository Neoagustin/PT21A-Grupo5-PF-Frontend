"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import ILanguage, { ICreateLanguage, IUpdateLanguage } from "@/interfaces/ILanguage";
import {
  fetchCreateLanguages,
  fetchDeleteLanguage,
  fetchLanguages,
  fetchLanguagesPage,
  fetchUpdateCountry_Photo,
  fetchUpdateFlag_Url,
  fetchUpdateImage_Url,
  fetchUpdateLanguageById,
} from "@/services/languages/language.service";
import ILaguageAdminContextProps from "./types";
import { usePathname } from "next/navigation";
import { useToken } from "@/context/TokenContext/TokenContext";

const LanguageAdminContext = createContext<ILaguageAdminContextProps | undefined>(undefined);

export const LanguageAdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [languages, setLanguages] = useState<ILanguage[]>([]);
  const [allLanguages, setAllLanguages] = useState<ILanguage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(0);
  const { token } = useToken();
  const recordsPerPage = 5;

  if (!token) throw new Error("Token inexistente");

  const previousPage = () => page > 1 && setPage((prev) => prev - 1);
  const nextPage = () => page < maxPages && setPage((prev) => prev + 1);

  const createLanguage = async (dataLanguage: ICreateLanguage) => {
    try {
      await fetchCreateLanguages(dataLanguage, token);
      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al Crear lenguajes");
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

  const deleteLanguageById = async (id: string) => {
    try {
      await fetchDeleteLanguage(id, token);
      setLanguages((prev) => prev.filter((language) => language.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al eliminar lenguaje");
    }
  };

  const updateLanguageById = async (id: string, values: IUpdateLanguage) => {
    try {
      const { name, general_description, brief_description, image_url, flag_url, country_photo } =
        values;
      const languageData = {
        name,
        general_description,
        brief_description,
        image_url: "",
        flag_url: "",
        country_photo: "",
      };

      const updatedLanguage = await fetchUpdateLanguageById(id, languageData, token);

      if (image_url instanceof File) await fetchUpdateImage_Url(id, image_url, token);
      if (flag_url instanceof File) await fetchUpdateFlag_Url(id, flag_url, token);
      if (country_photo instanceof File) await fetchUpdateCountry_Photo(id, country_photo, token);

      setLanguages((prevLanguages) =>
        prevLanguages.map((language) =>
          language.id === id ? { ...language, ...updatedLanguage } : language
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al actualizar el lenguaje");
    }
  };

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
        createLanguage,
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
