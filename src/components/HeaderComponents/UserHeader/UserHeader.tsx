"use client";

import { useToken } from "@/context/TokenContext/TokenContext";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const UserHeader: React.FC = () => {
  const { handleLogout } = useToken();

  return (
    <div className="flex items-center  space-x-2">
      <FontAwesomeIcon icon={faUser} className="text-lg" />
      <p
        className="cursor-pointer bg-[#FF5A4D] text-white hover:text-[#FF5A4D] hover:bg-whitePage px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md"
        onClick={handleLogout}
      >
        Cerrar sesión
      </p>
    </div>
  );
};

export default UserHeader;
