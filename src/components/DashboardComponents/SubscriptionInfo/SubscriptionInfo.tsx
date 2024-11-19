import SubscriptionPlanCard from "@/components/GeneralComponents/SubscriptionPlanCard/SubscriptionPlanCard";
import { SubscriptionName } from "@/components/GeneralComponents/SubscriptionPlanCard/types";
import { useUser } from "@/context/UserContext/UserContext";
import React from "react";

export const SubscriptionInfo: React.FC = () => {
  const { user } = useUser();

  if (!user) return;

  const subscriptionName =
    user.subscription.name.charAt(0).toUpperCase() +
    user.subscription.name.slice(1).toLowerCase();

  const isValidSubscriptionName = (name: string): name is SubscriptionName => {
    return ["Standard", "Premium", "Pro"].includes(name);
  };

  return (
    <div className="m-auto flex flex-col justify-evenly gap-3 sm:flex-row">
      {isValidSubscriptionName(subscriptionName) && (
        <>
          {subscriptionName !== "Pro" && (
            <SubscriptionPlanCard
              subName={subscriptionName}
              button={false}
              isCurrent={true}
            />
          )}
          <SubscriptionPlanCard
            subName={subscriptionName === "Standard" ? "Premium" : "Pro"}
          />
        </>
      )}
    </div>
  );
};

export default SubscriptionInfo;
