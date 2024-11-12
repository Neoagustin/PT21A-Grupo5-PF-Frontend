import SubscriptionPlanCard from "@/components/GeneralComponents/SubscriptionPlanCard/SubscriptionPlanCard";
import React from "react";

const SubscriptionsList = () => {
  return (
    <div className="pt-6 gap-4 mx-auto grid grid-cols-1 justify-center sm:grid-cols-2 xl:grid-cols-3">
      <SubscriptionPlanCard subName="Standard" />
      <SubscriptionPlanCard subName="Premium" isRecommended={true} />
      <SubscriptionPlanCard subName="Pro" className="sm:col-span-2 sm:w-[50%] xl:w-[100%]" />
    </div>
  );
};

export default SubscriptionsList;
