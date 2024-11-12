import Image from "next/image";
import React from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import ButtonGoogle from "@/components/GeneralComponents/ButtonGoogle/ButtonGoogle";

export const RegisterInfo: React.FC = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center xl:flex-row xl:gap-10 xl:justify-center">
      <Image
        className="sm:w-[483px] xl:hidden"
        src={"/assets/images/mobileImageLoginRegister.png"}
        alt="Imagen movil del registro"
        width={335}
        height={197}
      />
      <Image
        className="hidden xl:block"
        src={"/assets/images/imageLoginRegister.png"}
        alt="Imagen del registro"
        width={637}
        height={722}
      />
      <div className="flex flex-col gap-5">
        <h2 className="text-blackPage text-4xl font-bold text-center my-5">Registrarse</h2>
        <RegisterForm />
        <div className="flex items-center justify-between">
          <div className="w-[80px] h-[1px] bg-gray sm:w-[150px]"></div>
          <h6 className="text-gray text-xs font-light">Registrate con Google</h6>
          <div className="w-[80px] h-[1px] bg-gray sm:w-[150px]"></div>
        </div>
        <ButtonGoogle name="Registrarse con google" />
      </div>
    </div>
  );
};

export default RegisterInfo;
