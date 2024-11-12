import React from "react";
import ISubtitleProps from "./types";

const Subtitle: React.FC<ISubtitleProps> = ({ label }) => {
  return (
    <h2 className="text-[16px] font-medium sm:text-[22px] md:text-[24px] lg:text-[28px] xl:text-[30px]">
      {label}
    </h2>
  );
};

export default Subtitle;