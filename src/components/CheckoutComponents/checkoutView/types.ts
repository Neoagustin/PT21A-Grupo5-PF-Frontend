import React from "react";

export interface ICheckoutViewProps {
  slug: string;
}

export const handleSelectCard = (
  setSelectedCard: React.Dispatch<React.SetStateAction<string | null>>,
  card: string
) => {
  setSelectedCard(card);
};

export const handleSelectPaymentMethod = (
  setSelectedPaymentMethod: React.Dispatch<React.SetStateAction<string | null>>,
  paymentMethod: string
) => {
  setSelectedPaymentMethod(paymentMethod);
};

export const handleSaveCard = (
  setSaveCard: React.Dispatch<React.SetStateAction<boolean>>,
  choice: boolean
) => {
  setSaveCard(choice);
};
