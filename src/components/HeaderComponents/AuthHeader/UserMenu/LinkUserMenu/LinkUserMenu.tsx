import React from "react";
import ILinkButtonProps from "./types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkUserMenu: React.FC<ILinkButtonProps> = ({ href, icon, text, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
      w-full flex items-center space-x-2 text-left p-2 text-sm text-gray-700 hover:bg-violet hover:text-white transition-colors
      sm:text-[16px] sm:px-3 py-[12px]
      "
    >
      <FontAwesomeIcon icon={icon} className="w-[14px] sm:w-[16px]" />
      <span>{text}</span>
    </Link>
  );
};

export default LinkUserMenu;
