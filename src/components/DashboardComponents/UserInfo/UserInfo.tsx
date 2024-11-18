"use client";

import { useUser } from "@/context/UserContext/UserContext";
import Image from "next/image";
import React from "react";
import ButtonData from "../ButtonData/ButtonData";
import { faGem, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import UserData from "../UserData/UserData";
import { IUserInfoProps } from "./types";
import ChangePassword from "../ChangePassword/ChangePassword";
import SuscriptionInfo from "../SuscriptionInfo/SuscriptionInfo";

export const UserInfo: React.FC<IUserInfoProps> = ({ slug }: IUserInfoProps): React.ReactElement => {

    const { user } = useUser();

    if (!user) return <div></div>;
    
    return (

        <div className="mt-10 flex flex-col items-center gap-5 sm:px-3 lg:px-0 xl:flex-row xl:justify-between">
            <div className="w-full flex flex-col items-center gap-5 xl:flex-row xl:items-start xl:h-[500px] xl:w-[500px]">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-center gap-5 xl:self-center">
                        <Image className="rounded-full bg-gray" src={user?.photo} alt="Imagen del usuario" width={80} height={80} />
                        <h1 className="text-lg font-medium">{user?.name}</h1>
                    </div>
                    <div className="w-full flex flex-wrap justify-center gap-5 sm:justify-between xl:flex-col xl:items-start">
                        <ButtonData logo={faUser} name='MI PERFIL' isActive={slug === 'profile'} path='profile' />
                        <ButtonData logo={faGem} name='SUSCRIPCIONES' isActive={slug === 'suscription'} path='suscription' />
                        <ButtonData logo={faLock} name='SEGURIDAD DE LA CUENTA' isActive={slug === 'security'} path='security' />
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gray xl:w-[1px] xl:h-[500px]"></div>
            </div>
            <div className="w-full">
                {
                    slug === 'profile' ? (
                        <UserData user={user} />
                    ) : slug === 'security' ? (
                        <ChangePassword />
                    ) : slug === 'suscription' ? (
                        <SuscriptionInfo />
                    ) : null
                }
            </div>
        </div>

    );

};

export default UserInfo;