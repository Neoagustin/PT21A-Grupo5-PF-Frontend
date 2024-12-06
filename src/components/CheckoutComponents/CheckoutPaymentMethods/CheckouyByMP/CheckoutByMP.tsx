"use client";
import React, { useState } from "react";
import { checkout, ICheckoutByMPProps } from "./types";
import Image from "next/image";
import { handleSelectPaymentMethod } from "../../checkoutView/types";
import { ISuscription } from "@/interfaces/ISubscription";

const CheckoutByMP: React.FC<ICheckoutByMPProps> = ({
  selectedPaymentMethod,
  setSelectedPaymentMethod,
  idMembership,
  subscriptionPlan,
}): React.ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [discountCode, setDiscountCode] = useState<string>("");

  const idSubscription = subscriptionPlan?.id;

  const handleCheckout = async (subscriptionPlan: ISuscription) => {
    setLoading(true);
    setError(null);

    try {
      const data = await checkout(idMembership, idSubscription, discountCode);

      const userDataString = localStorage.getItem("userData");
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        userData.membership.subscription = subscriptionPlan;
        userData.subscription = subscriptionPlan;
        localStorage.setItem("userData", JSON.stringify(userData));
      }

      if (data?.link) {
        window.location.href = data.link;
      } else {
        throw new Error("No se encontró el link de redirección.");
      }
    } catch (error) {
      console.error(error);
      setError("Hubo un problema al procesar la suscripción. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-[20px] sm:gap-[25px] md:gap-[30px] justify-center items-center mb-[20px]">
      {/* Selección de Mercado Pago como medio de pago */}

      <label className="flex cursor-pointer ml-[10px] mr-[10px] border-[1px] border-gray p-[2px] justify-between w-[90%]">
        <div className="flex gap-[2px] items-center">
          <input
            type="checkbox"
            name="paymentMethod"
            checked={selectedPaymentMethod === "Bank Transfer"}
            onClick={() => handleSelectPaymentMethod(setSelectedPaymentMethod, "Bank Transfer")}
            className="hidden"
          />
          <span
            className={`w-[18px] h-[18px] rounded-full border-[2px] border-black transition-colors duration-300 ease-in-out ${
              selectedPaymentMethod === "Bank Transfer" ? "bg-blue-500 border-blue-500" : ""
            }`}
          ></span>
          <Image
            className="sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px]"
            src="https://i.pinimg.com/236x/6d/20/15/6d20156a784ad1a24110d6379cc79156.jpg"
            alt="BANK"
            width={31}
            height={30}
          />
          <span className="font-bold text-[14px] sm:text-[18px] md:text-[21px] lg:text-[23px]">
            Transferencia Mercado Pago
          </span>
        </div>

        <div>
          <Image
            className="sm:w-[42px] sm:h-[42px]"
            src="https://i.pinimg.com/236x/8a/39/22/8a3922c4dac0f8f7322f611f827d3960.jpg"
            alt="MERCADO PAGO"
            width={36}
            height={40}
          />
        </div>
      </label>

      <div className="flex flex-col gap-[5px]">
        <label
          htmlFor="discountNumber"
          className="flex text-[12px] sm:text-[16px] md:text-[17px] lg:text-[19px]"
        >
          Agregar codigo de descuento.
        </label>
        <input
          id="discountNumber"
          name="discountNumber"
          type="string"
          className="shadow-md shadow-gray sm:w-[250px] sm:h-[30px] lg:w-[295px] lg:h-[35px]"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className={`w-[250px] h-[40px] bg-emerald-800 text-whitePage font-bold transition-all hover:bg-emerald-900 justify-center ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handleCheckout(subscriptionPlan!)}
        disabled={loading}
      >
        {loading ? "Procesando..." : "Confirmar Suscripción"}
      </button>
      {error && <p className="text-rose-700 mt-2">{error}</p>}
    </div>
  );
};

export default CheckoutByMP;
