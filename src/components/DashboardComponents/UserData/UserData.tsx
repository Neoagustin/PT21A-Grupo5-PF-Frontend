import React from "react";
import { IUserDataProps } from "./types";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import UserAction from "../UserAction/UserAction";
import ModalUpdateUser from "../ModalUpdateUser/ModalUpdateUser";

export const UserData: React.FC<IUserDataProps> = ({ user }: IUserDataProps): React.ReactElement => {

    const splitName = user?.name.split(' ');

    return (

        <div className="w-full flex flex-col gap-5 xl:w-[626px]">
            <Subtitle label="Información:" />
            <div className="flex flex-col w-full gap-5">
                <div className="h-[49px] shadow-md shadow-lightgray flex items-center px-3">
                    <h3 className="text-sm font-semibold sm:text-base">Nombre: <span className="font-light">{splitName && splitName[0]}</span></h3>
                </div>
                <div className="h-[49px] shadow-md shadow-lightgray flex items-center px-3">
                    <h3 className="text-sm font-semibold sm:text-base">Apellido: <span className="font-light">{splitName && splitName[1]}</span></h3>
                </div>
                <div className="h-[49px] shadow-md shadow-lightgray flex items-center px-3">
                    <h3 className="text-sm font-semibold sm:text-base">E-Mail: <span className="font-light">{user?.email}</span></h3>
                </div>
                <div className="h-[49px] shadow-md shadow-lightgray flex items-center px-3">
                    <h3 className="text-sm font-semibold sm:text-base">N° de documento: <span className="font-light">{user?.idNumber}</span></h3>
                </div>
                <div className="h-[49px] shadow-md shadow-lightgray flex items-center px-3">
                    <h3 className="text-sm font-semibold sm:text-base">Rol: <span className="font-light">{user?.role}</span></h3>
                </div>
            </div>
            <UserAction />
            <ModalUpdateUser />
        </div>

    );

};

export default UserData;