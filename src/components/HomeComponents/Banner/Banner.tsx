import React from "react";
import Image from "next/image";
import imgBannerHome from "../../../../public/assets/images/bannerHome.png";

const Banner: React.FC = () => {
  return (
    <div className="mt-[1px] w-[100%]">
      <Image src={imgBannerHome} alt="" width={1200} height={360} />
    </div>
  );
};

export default Banner;
