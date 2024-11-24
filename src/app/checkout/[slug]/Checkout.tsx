import CheckoutView from "@/components/CheckoutComponents/checkoutView/CheckoutView";
import React from "react";

interface ICheckoutProps {
  params: {
    slug: string;
  };
}

export const Checkout: React.FC<ICheckoutProps> = ({ params }: ICheckoutProps) => {
  const { slug } = params;

  return <CheckoutView slug={slug} />;
};

export default Checkout;
