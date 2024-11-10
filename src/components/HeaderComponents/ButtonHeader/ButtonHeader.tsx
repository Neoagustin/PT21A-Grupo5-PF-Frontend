import React from "react";
import IButtonProps from "./types";
import Link from "next/link";

const ButtonHeader: React.FC<IButtonProps> = ({ href, label, isPrimary }) => {
  return (
    <div
      className={`flex items-center ${
        isPrimary
          ? `
          bg-violet transition-colors duration-200 
          hover:bg-violetHover
          `
          : "bg-whitePage border border-solid border-blackPage transition-all duration-200 hover:border-violet"
      }`}
    >
      <Link
        href={href}
        className={`
          text-[12px] px-2 py-1
          sm:text-[16px] sm:px-5 sm:py-2 md:px-8
          
          ${
            isPrimary
              ? `
            text-white 
            hover:bg-violet-dark
            `
              : `text-blackPage border-blackPage hover:text-violet`
          }`}
      >
        {label}
      </Link>
    </div>
  );
};

export default ButtonHeader;
