
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface ICheckoutByMPProps {
    selectedPaymentMethod: string | null;
    setSelectedPaymentMethod: React.Dispatch<React.SetStateAction<string | null>>;
    suscription: string | null;
    idMembership: string | undefined;
    idSubscription: string | undefined
};


export const checkout = async (idMembership: string | undefined, idSubscription: string | undefined, discountCode: string) => {
    try {

      console.log(idMembership)
      console.log(idSubscription)
      console.log(discountCode);
      


      const response = await fetch(`${API_URL}/membership/${idMembership}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "subs_id" : idSubscription,
          "vaucher" : discountCode
        }), 
      });

      console.log(response)

      if (!response.ok) {
        throw new Error(`Error: No se ha podido procesar el cambio de plan.`);
      }
  
      const data = await response.json();
     
      return data;
    } catch (error) {
      console.error('Error en la solicitud fetch:', error);
      throw error;
    }
  };