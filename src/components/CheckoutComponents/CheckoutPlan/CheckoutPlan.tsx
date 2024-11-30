import React from "react";
import SubscriptionPlanCard from "@/components/GeneralComponents/SubscriptionPlanCard/SubscriptionPlanCard";
import { SubscriptionName } from "@/components/GeneralComponents/SubscriptionPlanCard/types";
import { ICheckoutPlanProps } from "./types";

const CheckoutPlan: React.FC<ICheckoutPlanProps> = ({
  slug,
}): React.ReactElement => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center lg:mr-[15px]">
          <div className="w-fit h-fit">
            <SubscriptionPlanCard
              button={false}
              subName={slug as SubscriptionName}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPlan;
