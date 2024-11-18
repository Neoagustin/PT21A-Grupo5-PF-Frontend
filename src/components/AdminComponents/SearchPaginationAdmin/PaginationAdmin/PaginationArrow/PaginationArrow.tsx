import React from "react";
import IPaginationArrowProps from "./types";

const PaginationArrow: React.FC<IPaginationArrowProps> = ({ direction, pageFunction }) => {
  return (
    <span
      onClick={pageFunction}
      className="
        border border-lightgrayTransparent py-1 px-3 
        transition-all duration-200 hover:border-skyblue hover:text-skyblue
        active:scale-[0.95] cursor-pointer
      "
    >
      {direction}
    </span>
  );
};

export default PaginationArrow;
