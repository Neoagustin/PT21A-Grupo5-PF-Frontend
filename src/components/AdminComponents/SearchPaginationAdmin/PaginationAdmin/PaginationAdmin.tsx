import React from "react";
import PaginationArrow from "./PaginationArrow/PaginationArrow";
import { useUserAdminContext } from "@/context/Admin/UserAdminContext/UserAdminContext";
import useSegment from "@/hooks/useSegment";
import { useLanguageAdminContext } from "@/context/Admin/LanguageAdminContext/LanguageAdminContext";

const PaginationAdmin: React.FC = () => {
  const { segment } = useSegment();

  const languageContext = useLanguageAdminContext();
  const userContext = useUserAdminContext();

  const { page, previousPage, nextPage, maxPages } =
    segment === "languages" ? languageContext : userContext;

  return (
    <div className="flex items-center justify-between sm:text-[18px]">
      <div className="flex gap-4 select-none cursor-pointer">
        <PaginationArrow direction="<" pageFunction={previousPage} />
        <PaginationArrow direction=">" pageFunction={nextPage} />
      </div>
      <p>
        Resultados {page} de {maxPages}
      </p>
    </div>
  );
};

export default PaginationAdmin;
