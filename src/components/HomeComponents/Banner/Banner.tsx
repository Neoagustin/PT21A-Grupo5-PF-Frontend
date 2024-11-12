import React from "react";
import Image from "next/image";
import imgBannerHome from "../../../../public/assets/images/bannerHome.png";

const Banner: React.FC = () => {
  return (
    <div className="relative mt-[1px] w-[100%] min-h-[150px]">
      <Image
        src={imgBannerHome}
        alt="Banner"
        width={1200}
        height={358}
        placeholder="blur"
        blurDataURL="/assets/images/bannerHome.png"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="min-h-[150px] h-[100%]"
      />
      <div
        className="hidden absolute top-[12%] left-4 bg-white p-2 shadow-lg rounded-lg z-2 text-blackPage w-[250px]
        sm:block
        md:top-[15%] md:left-6 md:w-[330px]
        lg:w-[360px] lg:left-6
        xl:top-[10%] xl:left-7 xl:p-4 xl:w-[460px]
        "
      >
        <h3
          className="
        text-[22px] font-semibold
        md:text-[24px]
        lg:text-[26px]
        xl:text-[32px]
        "
        >
          Rebajas relámpago:
        </h3>
        <h3
          className="
        text-[22px] mb-2 font-semibold
        md:text-[24px]
        lg:text-[26px]
        xl:text-[32px]
        "
        >
          ¡solo hoy!
        </h3>
        <p className="text-[11px] md:text-[12px] lg:text-[14px]">
          Aprende de (casi) todo. Encuentra ahora cursos rebajados desde solo 10,99 US$.
        </p>
      </div>
    </div>
  );
};

export default Banner;
