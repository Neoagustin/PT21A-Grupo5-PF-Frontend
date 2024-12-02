import React from "react";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const handleSelectCard = (setSelectedCard: React.Dispatch<React.SetStateAction<string | null>>, card: string) => {
    setSelectedCard(card)
}
export const handleSelectPaymentMethod = (setSelectedPaymentMethod: React.Dispatch<React.SetStateAction<string | null>>, paymentMethod: string) => {
    setSelectedPaymentMethod(paymentMethod)
}
export const handleSaveCard = (setSaveCard: React.Dispatch<React.SetStateAction<boolean>>, choice: boolean) => {
        setSaveCard(choice)
}
export const handlePayment = (suscription: string | null, router: AppRouterInstance) => {
    if (suscription === "premium") {
      const paymentUrl = "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084930f529801932bca1e2b09a5";
      const paymentWindow = window.open(paymentUrl, "_blank", "width=800,height=600");
      const interval = setInterval(() => {
        if (paymentWindow?.closed) {
          clearInterval(interval);
          router.push("https://rompiendo-barreras-pf.vercel.app/"); 
        }}, 500);
    } else {
      const paymentUrl = "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380849323ec5801932bcd00c00374";
      const paymentWindow = window.open(paymentUrl, "_blank", "width=800,height=600");
      const interval = setInterval(() => {
        if (paymentWindow?.closed) {
          clearInterval(interval);
          router.push("https://rompiendo-barreras-pf.vercel.app/"); 
      }}, 500);
    }
    
  };

