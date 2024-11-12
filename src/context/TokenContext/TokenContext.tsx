"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ITokenContextProps } from "./types";
import Cookies from "js-cookie";

const TokenContext = createContext<ITokenContextProps | null>(null);

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem("userToken");
    if (savedToken) {
      setToken(savedToken);
    }
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    Cookies.remove("userToken");
    setToken(null);
  };

  return (
    <TokenContext.Provider value={{ token, setToken, handleLogout }}>
      {isLoading ? null : children}{" "}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(TokenContext);

  if (context === null)
    throw new Error("El contexto debe ser utilizado dentro de un TokenProvider.");

  return context;
};
