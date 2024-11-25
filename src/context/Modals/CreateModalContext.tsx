"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ICreateModalContextProps from "./types";

const CreateModalContext = createContext<ICreateModalContextProps | undefined>(undefined);

export const CreateModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  return (
    <CreateModalContext.Provider value={{ isCreateModalOpen, openCreateModal, closeCreateModal }}>
      {children}
    </CreateModalContext.Provider>
  );
};

export const useCreateModalContext = (): ICreateModalContextProps => {
  const context = useContext(CreateModalContext);
  if (!context) {
    throw new Error("useCreateModalContext debe ser usado dentro de un CreateModalProvider");
  }
  return context;
};
