"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ISubscriptionPlanCardProps from "./types";
import CheckList from "./CheckListPlan/CheckListPlan";
import useSubscriptionPlan from "@/hooks/useSubscriptionPlan ";
import Loading from "../Loading/Loading";

const SubscriptionPlanCard: React.FC<ISubscriptionPlanCardProps> = ({
  subName,
  isRecommended,
  isCurrent,
  className,
  button = true,
}) => {
  const { subscriptionPlan, loading, error, isFree } =
    useSubscriptionPlan(subName);

  if (loading || error || !subscriptionPlan) {
    return (
      <div>{loading ? <Loading /> : error || "No se encontró el plan"}</div>
    );
  }

  const { name, price, description } = subscriptionPlan;
  const href =
    subName === "Standard"
      ? "/login"
      : subName === "Premium"
      ? "/checkout/premium"
      : subName === "Pro"
      ? "/checkout/pro"
      : "#";

  return (
    <div
      className={`h-[450px] mx-auto w-[90%] max-w-[360px] flex flex-col justify-between border border-lightgray rounded-[7px] pb-6
      sm:w-[100%] sm:max-w-[100%] sm:h-[470px]
      xl:col-span-1
      ${className}
      `}
    >
      <div>
        <div
          className={`${
            name === "Standard"
              ? "bg-lightgray"
              : name === "Premium"
              ? "bg-skyblue"
              : "bg-violet"
          } 
        h-[11px] rounded-t-[7px]`}
        ></div>
        <div className="bg-offWhite p-[9px] flex items-center justify-between mt-[10px]">
          <div>
            <h3
              className="
            font-bold text-[16px] tracking-[1px] 
            sm:text-[18px]
            "
            >
              Plan {name}
            </h3>
            <div className="text-darkgray flex items-center gap-1">
              <FontAwesomeIcon icon={faUser} className="w-[12px] sm:w-[12px]" />
              <p className="text-[10px] sm:text-[12px]">individual</p>
            </div>
          </div>
          {isRecommended ? (
            <div
              className="
              px-[10px] h-7 flex items-center bg-violetTransparent border border-violet
              md:px-[14px] md:h-8
              "
            >
              <p className="text-violet font-bold text-[12px] md:text-[14px]">
                Recomendado
              </p>
            </div>
          ) : null}
          {isCurrent ? (
            <div
              className="
              px-[10px] h-7 flex items-center bg-greenTransparent border border-green
              md:px-[14px] md:h-8
              "
            >
              <p className="text-green font-bold text-[12px] md:text-[14px]">
                PLAN ACTUAL
              </p>
            </div>
          ) : null}
        </div>

        <div className="py-[11px] px-[9px]">
          <h3
            className="
          font-bold text-[18px] tracking-[1px] 
          sm:text-[20px]"
          >
            {isFree ? "Gratis" : `$${price}`}
          </h3>
          <div className="">
            <CheckList description={description} />
          </div>
        </div>
      </div>

      {button ? (
        <div className="mt-auto text-center pb-4">
          <Link
            href={href}
            className="
          text-whitePage border border-violet text-[14px] tracking-[1px] bg-violet font-bold py-[7px] px-[22px] rounded-[4px] transition-all duration-300 ease-in-out 
          hover:bg-[#fff0] hover:text-violet
          md:text-[16px]
          "
          >
            {isFree ? "OBTENER GRATIS" : `ACTUALIZAR A ${name.toUpperCase()}`}
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default SubscriptionPlanCard;
