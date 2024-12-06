// hooks/useSubscriptionPlan.ts
import { useState, useEffect } from "react";
import { ISubscription } from "../components/GeneralComponents/SubscriptionPlanCard/types";
import { fetchGetSubscriptions } from "@/services/fetchSubscriptions";
import { useToken } from "@/context/TokenContext/TokenContext";

const useSubscriptionPlan = (subName: string) => {
  const [subscriptionPlan, setSubscriptionPlan] = useState<ISubscription | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFree, setIsFree] = useState<boolean>(false);
  const { token } = useToken();

  if (!token) throw new Error("Token inexistente");

  useEffect(() => {
    const fetchSubscription = async () => {
      setLoading(true);
      setError(null);
      try {
        const data: ISubscription[] = await fetchGetSubscriptions(token);
        const plan = data.find(
          (sub) => sub.name.toLocaleLowerCase() === subName.toLocaleLowerCase()
        );
        if (plan) {
          setSubscriptionPlan(plan);
        } else {
          setError("No se encontró el plan solicitado");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [subName, token]);

  // Logica para saber si es GRATIS
  useEffect(() => {
    if (subscriptionPlan?.price === "0.00") {
      setIsFree(true);
    } else {
      setIsFree(false);
    }
  }, [subscriptionPlan]);

  return { subscriptionPlan, loading, error, isFree };
};

export default useSubscriptionPlan;
