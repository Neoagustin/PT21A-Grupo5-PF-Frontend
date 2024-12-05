"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IRefferalAdminContextProps } from "./types";
import {
  fetchCreateReferral,
  fetchGetReferral,
} from "@/services/referral-codes/Referral-Codes.Service";
import IReferral, { ICreateReferral } from "@/interfaces/IReferral";

const ReferralsAdminContext = createContext<IRefferalAdminContextProps | undefined>(undefined);

export const ReferralsAdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [referrals, setReferrals] = useState<IReferral[]>([]);

  const createReferral = async (referralData: ICreateReferral) => {
    try {
      await fetchCreateReferral(referralData);
      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al crear Referidos");
    }
  };

  useEffect(() => {
    const getReferrals = async () => {
      setLoading(true);
      try {
        const referralsList: IReferral[] = await fetchGetReferral();
        setReferrals(referralsList);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error al obtener Referidos");
      } finally {
        setLoading(false);
      }
    };

    getReferrals();
  }, []);

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
