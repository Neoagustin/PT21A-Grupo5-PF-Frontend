"use client";
import CardLanguage from "@/components/GeneralComponents/CardLanguage/CardLanguage";
import Loading from "@/components/GeneralComponents/Loading/Loading";
import useLanguages from "@/hooks/useLanguage";
import ILanguage from "@/interfaces/ILanguage";
import React from "react";

const LanguagesList = () => {
  const { languages, loading, error } = useLanguages();

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="text-red-500 font-semibold text-center">
        Hubo un error al cargar los lenguajes: {error}
      </div>
    );
  }

  return (
    <div className="pt-6 mx-auto grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
      {languages.map((language: ILanguage) => (
        <CardLanguage key={language.id} language={language} />
      ))}
    </div>
  );
};

export default LanguagesList;
