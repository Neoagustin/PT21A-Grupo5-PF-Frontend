import CheckoutView from "@/components/CheckoutComponents/checkoutView/CheckoutView";
import React from "react";
import { ICheckoutProps } from "../types";

export const Checkout: React.FC<ICheckoutProps> = async ({ params }: ICheckoutProps) => {

    const { slug } = await params;

    return (


        <CheckoutView slug={slug} />


    );

};

export default Checkout;
