"use client";

import { useUser } from "@/context/UserContext/UserContext";
import Image from "next/image";
import React from "react";
import ButtonData from "../ButtonData/ButtonData";
import { faGem, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import UserData from "../UserData/UserData";

export const UserInfo: React.FC = (): React.ReactElement => {

    const { user } = useUser();

    return (

        <div className="mt-10">
            <Image className="rounded-full bg-gray" src="" alt="Imagen del usuario" width={80} height={80} />
            <h1 className="text-lg font-medium">{user?.name}</h1>
            <div>
                <ButtonData logo={faUser} name='MI PERFIL' isActive={true}  />
                <ButtonData logo={faGem} name='SUSCRIPCIONES' isActive={false}  />
                <ButtonData logo={faLock} name='SEGURIDAD DE LA CUENTA' isActive={false}  />
            </div>
            <div className="w-full h-[1px] bg-gray"></div>
            <UserData user={user} />
        </div>

    );

};

export default UserInfo;