"use client";

import SubscriptionPlanCard from "@/components/GeneralComponents/SubscriptionPlanCard/SubscriptionPlanCard";
import { useToken } from "@/context/TokenContext/TokenContext";
import { useUser } from "@/context/UserContext/UserContext";
import React from "react";

const SubscriptionsList: React.FC = () => {
  const { token } = useToken();
  const { user } = useUser();

  return (
    <div className="pt-6 gap-4 mx-auto grid grid-cols-1 justify-center sm:grid-cols-2 xl:grid-cols-3">
      <SubscriptionPlanCard
        subName="Standard"
        button={!token}
        isCurrent={!!(token && user && user.membership.subscription?.name === "Standard")}
      />
      <SubscriptionPlanCard
        subName="Premium"
        button={user?.role !== "admin"}
        isRecommended={true}
        isCurrent={!!(token && user && user.membership.subscription?.name === "Premium")}
      />
      <SubscriptionPlanCard
        subName="Pro"
        button={user?.role !== "admin"}
        className="sm:col-span-2 sm:w-[50%] xl:w-[100%]"
        isCurrent={!!(token && user && user.membership.subscription?.name === "Pro")}
      />
    </div>
  );
};

export default SubscriptionsList;
