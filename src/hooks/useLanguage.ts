// hooks/useLanguages.ts
import { useState, useEffect } from "react";
import ILanguage from "@/interfaces/ILanguage";
import { fetchGetLanguage } from "@/services/fetchLanguages";

const useLanguages = () => {
  const [languages, setLanguages] = useState<ILanguage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      setLoading(true);
      setError(null);
      try {
        const data: ILanguage[] = await fetchGetLanguage();
        if (data.length > 0) {
          setLanguages(data);
        } else {
          setError("No se encontraron los lenguajes solicitados");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  return { languages, loading, error };
};

export default useLanguages;
