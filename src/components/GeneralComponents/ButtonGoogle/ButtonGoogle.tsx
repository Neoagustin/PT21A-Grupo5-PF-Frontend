"use client";

import Image from "next/image";
import React from "react";
import { IButtonGoogleProps } from "./types";
import { fetchLoginGoogleUser } from "@/services/fetchLoginGoogleUser";

export const ButtonGoogle: React.FC<IButtonGoogleProps> = ({
  name,
}: IButtonGoogleProps): React.ReactElement => {
  const handleLoginGoogleUser = async () => await fetchLoginGoogleUser();

  return (
    <button
      onClick={handleLoginGoogleUser}
      className="flex items-center w-[319px] gap-3 border-blackPage border-[1px] justify-center sm:w-[459px]"
    >
      <Image
        src={"/assets/icons/logoGoogle.png"}
        alt="Logo de Google"
        width={27}
        height={41}
      />
      {name}
    </button>
  );
};

export default ButtonGoogle;
