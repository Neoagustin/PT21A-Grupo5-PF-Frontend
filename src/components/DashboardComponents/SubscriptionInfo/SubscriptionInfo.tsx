import SubscriptionPlanCard from "@/components/GeneralComponents/SubscriptionPlanCard/SubscriptionPlanCard";
import { SubscriptionName } from "@/components/GeneralComponents/SubscriptionPlanCard/types";
import { useUser } from "@/context/UserContext/UserContext";
import Link from "next/link";
import React from "react";

export const SubscriptionInfo: React.FC = () => {
  const { user } = useUser();

  if (!user) return;

  const subscriptionName =
    user.membership.subscription?.name.charAt(0).toUpperCase() +
    user.membership.subscription?.name.slice(1).toLowerCase();

  const isValidSubscriptionName = (name: string): name is SubscriptionName => {
    return ["Standard", "Premium", "Pro"].includes(name);
  };

  return (
    <div className="max-w-[350px] m-auto flex flex-col items-center gap-3">
      {isValidSubscriptionName(subscriptionName) && (
        <>
          <SubscriptionPlanCard subName={subscriptionName} button={false} isCurrent={true} />

          <Link
            className="text-whitePage border border-violet text-[14px] tracking-[1px] bg-violet font-bold py-[7px] px-[22px] rounded-[4px] transition-all duration-300 ease-in-out 
          hover:bg-[#fff0] hover:text-violet
          md:text-[16px]"
            href="/#subscriptions"
          >
            VER MÁS PLANES
          </Link>
        </>
      )}
    </div>
  );
};

export default SubscriptionInfo;
