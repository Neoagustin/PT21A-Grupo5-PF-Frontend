import CheckoutView from "@/components/CheckoutComponents/checkoutView/CheckoutView";
import React from "react";
import ICheckoutProps from "./types";

export const Checkout: React.FC<ICheckoutProps> = ({
  params,
}: ICheckoutProps): React.ReactElement => {
  return <CheckoutView slug={params.slug} />;
};

export default Checkout;
