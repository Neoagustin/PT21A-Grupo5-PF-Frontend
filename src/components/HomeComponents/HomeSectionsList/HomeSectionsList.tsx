import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import React from "react";
import SubscriptionsList from "../SubscriptionsList/SubscriptionsList";
import LanguagesList from "../LanguagesList/LanguagesList";

const HomeSectionsList = () => {
  return (
    <div id="languages" className="px-3 sm:px-5 lg:px-0">
      {/* TITULO Y BIENVENIDA */}
      <section className="pt-4 pb-8 sm:py-9 xl:pb-20">
        <h1 className="text-[18px] tracking-[1px] font-medium sm:text-[22px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
          Domina los idiomas que necesitas, en un solo lugar.
        </h1>
        <p className="font-light text-gray text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          De lo básico a lo avanzado, te acompañamos en cada paso hacia tus objetivos.
        </p>
      </section>

      {/* SECCION DE LENGUAJES */}
      <section className="pb-12 xl:pb-20">
        <Subtitle label="Lenguajes" />
        <LanguagesList />
      </section>

      {/* SECCION DE PLANES */}
      <section id="subscriptions" className="pb-12 xl:pb-20">
        <Subtitle label="Elige tu suscripción" />
        <SubscriptionsList />
      </section>
    </div>
  );
};

export default HomeSectionsList;
