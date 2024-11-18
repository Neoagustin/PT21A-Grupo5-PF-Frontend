import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import ILogoHeaderProps from "./types";

const LogoHeader: React.FC<ILogoHeaderProps> = ({ label, animation = true }) => {
  return (
    <Link
      href="/"
      className={`w-[70px] flex items-center gap-1 cursor-pointer select-none transition-all duration-200 ${animation ? "hover:scale-[.95]" : null
        }`}
    >
      <FontAwesomeIcon
        icon={faGlobe}
        className="w-[30px] text-[30px] text-violet 
    sm:w-[40px] sm:text-[40px] 
    md:w-[50px] md:text-[50px]
    "
      />
      <p className=" text-2xl font-inknutAntiqua text-blackPage sm:text-[28px] md:text-[32px]">
        RB
      </p>
      <p className=" text-2xl font-inknutAntiqua text-blackPage sm:text-[28px] md:text-[32px]">
        {label}
      </p>
    </Link>
  );
};

export default LogoHeader;
