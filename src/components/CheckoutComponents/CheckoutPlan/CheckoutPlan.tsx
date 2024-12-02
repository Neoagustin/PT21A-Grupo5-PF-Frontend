import React from "react";
import SubscriptionPlanCard from "@/components/GeneralComponents/SubscriptionPlanCard/SubscriptionPlanCard";
import { SubscriptionName } from "@/components/GeneralComponents/SubscriptionPlanCard/types";
import { ICheckoutPlanProps } from "./types";

const CheckoutPlan: React.FC<ICheckoutPlanProps> = ({
  slug,
}): React.ReactElement => {
  return (
      
          <div className="flex items-center justify-center lg:mr-[15px] lg:self-start">
            <SubscriptionPlanCard
              className="shadow-2xl shadow-gray"
              button={false}
              subName={slug as SubscriptionName}
            />
          </div>
       
   
  );
};

export default CheckoutPlan;
