import React from "react";
import IButtonProps from "./types";
import Link from "next/link";

const ButtonHeader: React.FC<IButtonProps> = ({ href, label, isPrimary }) => {
  // Clases comunes
  const baseClasses = "border flex items-center transition-all duration-300";

  // Clases para el botón principal (primario)
  const primaryClasses = `
    bg-violet text-whitePage border-violet
    hover:bg-[#fff0] hover:border hover:bg-violet-dark
  `;

  // Clases para el botón secundario (no primario)
  const secondaryClasses = `
    bg-whitePage border border-solid border-blackPage text-blackPage 
    hover:border-[#fff0]  
  `;

  // Decidir clases según si es primario o no
  const buttonClasses = isPrimary ? primaryClasses : secondaryClasses;
  const linkClasses = isPrimary
    ? "text-white hover:bg-violet-dark"
    : "text-blackPage border-blackPage";

  return (
    <div className={`${baseClasses} ${buttonClasses}`}>
      <Link
        href={href}
        className={`text-[12px] px-2 py-1 sm:text-[16px] sm:px-5 sm:py-2 md:px-8 hover:text-violet ${linkClasses}`}
      >
        {label}
      </Link>
    </div>
  );
};

export default ButtonHeader;
