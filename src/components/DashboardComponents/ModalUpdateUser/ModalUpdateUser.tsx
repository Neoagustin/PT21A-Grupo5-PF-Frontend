"use client";

import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import { useUser } from "@/context/UserContext/UserContext";
import React from "react";
import UpdateUserForm from "../UpdateUserForm/UpdateUserForm";

export const ModalUpdateUser: React.FC = (): React.ReactElement => {

    const { modal, handleCloseModal } = useUser();

    return (

        <div>
            {
                modal && (
                    <div className="fixed w-full h-full transition-all bg-[#222222bb] top-0 left-0 flex items-center justify-center z-50">
                        <div className="w-[318px] bg-whitePage relative sm:w-[616px]">
                            <button onClick={handleCloseModal} className="absolute right-0 m-3" type="button">❌</button>
                            <div className="py-9 px-3 flex flex-col gap-3">
                                <Subtitle label="Modificar datos:" />
                                <UpdateUserForm />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    );

};

export default ModalUpdateUser;