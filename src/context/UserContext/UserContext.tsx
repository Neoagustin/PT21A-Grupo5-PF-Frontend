"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IUserContextProps } from "./types";
import { IUser } from "@/interfaces/IUser";

const UserContext = createContext<IUserContextProps | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }): React.ReactElement => {

    const [user, setUser] = useState<IUser | null>(null);
    const [modal, setModal] = useState<boolean>(false);

    const handleOpenModal = () => setModal(true);

    const handleCloseModal = () => setModal(false);

    useEffect(() => {

        const savedUser = localStorage.getItem("userData");

        if (savedUser) {

            setUser(JSON.parse(savedUser));

        };

    }, []);

    return (

        <UserContext.Provider value={{ user, setUser, modal, handleOpenModal, handleCloseModal }}>
            {children}
        </UserContext.Provider>

    );

};

export const useUser = () => {

    const context = useContext(UserContext);

    if (context === null) throw new Error("El contexto debe ser utilizado dentro de un TokenProvider.");

    return context;

};