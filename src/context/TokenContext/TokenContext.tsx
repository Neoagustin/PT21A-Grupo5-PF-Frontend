"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ITokenContextProps } from "./types";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useUser } from "../UserContext/UserContext";

const TokenContext = createContext<ITokenContextProps | null>(null);

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { setUser } = useUser();

  useEffect(() => {
    try {
      const savedToken = Cookies.get("userToken") || localStorage.getItem("userToken");
      if (savedToken) {
        setToken(savedToken);
      }
    } catch (error) {
      console.error("Error al cargar el token:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    Cookies.remove("userToken");
    Cookies.remove("userData");
    setToken(null);
    setUser(null);
    router.push("/");
  };

  return (
    <TokenContext.Provider value={{ token, setToken, handleLogout }}>
      {isLoading ? <div>Cargando...</div> : children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(TokenContext);
  if (context === null)
    throw new Error("El contexto debe ser utilizado dentro de un TokenProvider.");
  return context;
};
