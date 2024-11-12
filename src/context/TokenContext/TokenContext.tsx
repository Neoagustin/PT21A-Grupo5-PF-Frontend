"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ITokenContextProps } from "./types";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const TokenContext = createContext<ITokenContextProps | null>(null);

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {

        const token = localStorage.getItem('userToken');

        if (token) setToken(token);

    });

    const handleLogout = () => {

        localStorage.removeItem('userToken');
        localStorage.removeItem('userData');

        Cookies.remove('userToken');

        router.push('/');

    };

    return (

        <TokenContext.Provider value={{ token, setToken, handleLogout }}>
            {children}
        </TokenContext.Provider>

    );

};

export const useToken = () => {

    const context = useContext(TokenContext);

    if (context === null) throw new Error("El contexto debe ser utilizado dentro de un TokenProvider.");

    return context;

};