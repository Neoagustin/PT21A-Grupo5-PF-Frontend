import CheckoutView from "@/components/CheckoutComponents/CheckoutView/CheckoutView";
import React from "react";

interface ICheckoutProps {
    params: {
        slug: string;
    };
}

const Checkout: React.FC<ICheckoutProps> = ({ params }: ICheckoutProps) => {

    const { slug } = params;

    return (

        <CheckoutView slug={slug} />

    );
};

export default Checkout;