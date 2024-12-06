/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import CheckoutByCards from "../CheckoutPaymentMethods/CheckoutByCards/CheckoutByCards";
import CheckoutByMP from "../CheckoutPaymentMethods/CheckouyByMP/CheckoutByMP";
import CheckoutPlan from "../CheckoutPlan/CheckoutPlan";
import useSubscriptionPlan from "@/hooks/useSubscriptionPlan ";
import { useRouter } from "next/navigation";
import { IUserLocalStorage } from "@/interfaces/IUserLocalStorage";

const CheckoutView: React.FC<{ slug: string }> = ({ slug }: { slug: string }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(
    "Bank Transfer"
  );
  const [suscription, setSuscription] = useState<string | null>(null);
  const [userData, setUserData] = useState<IUserLocalStorage | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userData")!);
      setUserData(userData);
    }
    setSuscription(slug);
  }, [slug]);

  const { subscriptionPlan } = useSubscriptionPlan(slug);

  const idMembership: string | undefined = userData?.membership?.id;

  if (suscription && !["premium", "pro"].includes(suscription)) router.push("/not-found");

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-[18px] mt-[20px] ml-[20px] sm:text-[21px] md:text-[23px] lg:text-[25px] xl:text-[28px] sm:mt-[25px] sm:ml-[25px] md:mt-[35px] md:ml-[35px] lg:mt-[40px] lg:ml-[45px] xl:mt-[40px] xl:ml-[40px]">
        Confirmar Suscripción
      </h1>

      <div className="flex flex-col gap-[50px] lg:gap-[30px] lg:flex-row items-center justify-center mt-[50px]">
        <div className="flex flex-col self-center gap-[25px] shadow-2xl shadow-gray p-[3px] w-full sm:w-[80%] md:w-[80%] lg:w-[75%] xl:w-[60%] lg:ml-[15px]">
          <div className="flex justify-between items-center ml-[5px] mr-[5px] sm:ml-[20px] sm:mr-[20px] sm:text-[19px] md:ml-[40px] md:mr-[40px] md:text-[22px]">
            <p className="font-bold">Método de Pago</p>
            <p className="text-gray">Seguro y encriptado 🔓</p>
          </div>
          <CheckoutByCards />
          <CheckoutByMP
            suscription={suscription}
            subscriptionPlan={subscriptionPlan}
            selectedPaymentMethod={selectedPaymentMethod}
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            idMembership={idMembership}
          />
        </div>

        <CheckoutPlan slug={slug} />
      </div>
    </div>
  );
};
export default CheckoutView;

//Agregado para seleccionar metodo de pago una vez que funciones el formulario.-

//const [selectedCard, setSelectedCard] = useState<string | null>(null);
//const [saveCard, setSaveCard] = useState<boolean>(false)

//${selectedCard === "Credit Card" ? 'bg-blue-500 border-blue-500' : ''}
//${selectedCard === "Debit Card" ? 'bg-blue-500 border-blue-500' : ''}
//${saveCard === true ? 'bg-violet' : ''}
//${selectedPaymentMethod === "Card" ? 'bg-blue-500 border-blue-500' : ''}
