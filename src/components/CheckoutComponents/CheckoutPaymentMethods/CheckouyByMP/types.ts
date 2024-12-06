import { ISuscription } from "@/interfaces/ISubscription";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface ICheckoutByMPProps {
    selectedPaymentMethod: string | null;
    setSelectedPaymentMethod: React.Dispatch<React.SetStateAction<string | null>>;
    suscription: string | null;
    idMembership: string | undefined;
    subscriptionPlan: ISuscription | null
};


export const checkout = async (idMembership: string | undefined, idSubscription: string | undefined, discountCode: string) => {
    try {

      console.log(idMembership)
      console.log(idSubscription)
      console.log(discountCode);
      const token = localStorage.getItem('userToken')
      const tokenOk = token?.replace(/^"|"$/g, '')
      console.log(tokenOk);
      

      const response = await fetch(`${API_URL}/membership/${idMembership}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenOk}`
        },
        body: JSON.stringify({
          "subs_id" : idSubscription,
          "vaucher" : discountCode
        }), 
      });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error en la solicitud fetch:", error);
    throw error;
  }
};
