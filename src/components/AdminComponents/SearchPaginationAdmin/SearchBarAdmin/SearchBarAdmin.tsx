import { useAdminContext } from "@/context/AdminContext/AdminContext";
import React from "react";

const SearchBarAdmin: React.FC = () => {
  const { title } = useAdminContext();

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder={`Buscar ${title}...`}
        className="
          mb-8 px-4 py-[6px] border-b-2 border-lightgrayTransparent
          outline-none transition-all duration-200
          focus:border-b-skyblue hover:border-b-skyblue
          focus:shadow-sm
          sm:text-[18px] text-gray-700
        "
      />
    </div>
  );
};

export default SearchBarAdmin;
