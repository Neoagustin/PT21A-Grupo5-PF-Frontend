"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IRefferalAdminContextProps } from "./types";
import {
  fetchCreateReferral,
  fetchGetReferral,
} from "@/services/referral-codes/Referral-Codes.Service";
import IReferral, { ICreateReferral } from "@/interfaces/IReferral";
import { useToken } from "@/context/TokenContext/TokenContext";

const ReferralsAdminContext = createContext<IRefferalAdminContextProps | undefined>(undefined);

export const ReferralsAdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [referrals, setReferrals] = useState<IReferral[]>([]);
  const { token } = useToken();

  if (!token) throw new Error("Token inexistente");

  const createReferral = async (referralData: ICreateReferral) => {
    try {
      await fetchCreateReferral(referralData, token);
      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al crear Referidos");
    }
  };

  useEffect(() => {
    const getReferrals = async () => {
      setLoading(true);
      try {
        const referralsList: IReferral[] = await fetchGetReferral(token);
        setReferrals(referralsList);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error al obtener Referidos");
      } finally {
        setLoading(false);
      }
    };

    getReferrals();
  }, [token]);

  return (
    <ReferralsAdminContext.Provider
      value={{
        loading,
        error,
        referrals,
        createReferral,
      }}
    >
      {children}
    </ReferralsAdminContext.Provider>
  );
};

export const useReferralsAdminContext = () => {
  const context = useContext(ReferralsAdminContext);
  if (!context) {
    throw new Error(
      "useReferralsAdminContext debe ser utilizado dentro de un ReferralsAdminProvider"
    );
  }
  return context;
};
