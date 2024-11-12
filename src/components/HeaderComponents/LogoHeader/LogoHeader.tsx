import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const LogoHeader = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 cursor-pointer select-none transition-all duration-200 hover:scale-[.95]"
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
    </Link>
  );
};

export default LogoHeader;
