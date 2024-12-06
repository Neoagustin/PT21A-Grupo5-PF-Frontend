"use client";

import React from "react";
import FooterSocial from "../FooterSocial/FooterSocial";
import FooterInfo from "../FooterInfo/FooterInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import useSegment from "@/hooks/useSegment";

const Footer: React.FC = (): React.ReactNode => {
  const year = new Date().getFullYear();

  const { segment, isAdmin } = useSegment();

  if (isAdmin) return null;
  if (segment === "code-verification") return null;

  return (
    <footer className="flex flex-col gap-20 items-center px-2 pt-10">
      <div className="flex flex-col gap-20 md:flex-row md:justify-between md:w-[740px] lg:w-[860px] xl:w-[1200px]">
        <FontAwesomeIcon
          className="hidden xl:block xl:w-[230px] xl:h-[230px] xl:text-violet"
          icon={faGlobe}
        />
        <FooterSocial />
        <FooterInfo />
      </div>
      <div className="w-full md:w-[740px] lg:w-[860px] xl:w-[1200px]">
        <div className="h-[1px] bg-blackPage"></div>
        <p className="py-5 font-extralight text-center">
          &copy; Copyright rompiendo barreras {year}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
