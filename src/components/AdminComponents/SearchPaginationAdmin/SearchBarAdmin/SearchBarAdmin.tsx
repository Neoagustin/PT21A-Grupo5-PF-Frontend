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
          mb-8 border border-lightgrayTransparent px-4 py-[6px] outline-none
          transition-all duration-200 focus:border-skyblue sm:text-[18px]
        "
      />
    </div>
  );
};

export default SearchBarAdmin;
