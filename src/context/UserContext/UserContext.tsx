"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IUserContextProps } from "./types";
import { IUser } from "@/interfaces/IUser";

const UserContext = createContext<IUserContextProps | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactElement => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("userData");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const isAdmin = user?.role === "admin";
  const isTeacher = user?.role === "teacher";

  return (
    <UserContext.Provider value={{ user, setUser, isAdmin, isTeacher }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null)
    throw new Error("El contexto debe ser utilizado dentro de un TokenProvider.");
  return context;
};
