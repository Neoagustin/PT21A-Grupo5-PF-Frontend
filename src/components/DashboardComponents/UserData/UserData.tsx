import React from "react";
import { IUserDataProps } from "./types";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";

export const UserData: React.FC<IUserDataProps> = ({ user }: IUserDataProps): React.ReactElement => {

    const splitName = user?.name.split(' ');

    return (

        <div>
            <Subtitle label="Información:" />
            <div>
                <div>
                    <h3>Nombre: {splitName && splitName[0]}</h3>
                </div>
                <div>
                    <h3>Apellido: {splitName && splitName[1]}</h3>
                </div>
                <div>
                    <h3>E-Mail:: {user?.email}</h3>
                </div>
                <div>
                    <h3>Rol: Proximante...</h3>
                </div>
            </div>
        </div>

    );

};

export default UserData;