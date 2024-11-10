import Image from "next/image";
import React from "react";
import LoginForm from "../LoginForm/LoginForm";

export const LoginInfo: React.FC = (): React.ReactElement => {

    return (

        <div className="flex flex-col items-center xl:flex-row xl:gap-10 xl:justify-center">
            <Image className="sm:w-[483px] xl:hidden" src={'/assets/images/mobileImageLoginRegister.png'} alt="Imagen movil del registro" width={335} height={197} />
            <Image className="hidden xl:block" src={'/assets/images/imageLoginRegister.png'} alt="Imagen del registro" width={637} height={722} />
            <div>
                <h2 className="text-blackPage text-4xl font-bold text-center my-5">Inicia sesión</h2>
                <LoginForm />
            </div>
        </div>

    );

};

export default LoginInfo;