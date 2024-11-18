import CheckoutView from "@/components/CheckoutComponents/checkoutView/CheckoutView";
import React from "react";

export const Checkout: React.FC<{ params: { slug: string } }> = ({
  params,
}: {
  params: { slug: string };
}): React.ReactElement => {
  return <CheckoutView slug={params.slug} />;
};

export default Checkout;
