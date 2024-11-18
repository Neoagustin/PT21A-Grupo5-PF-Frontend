"use client";

import { useToken } from "@/context/TokenContext/TokenContext";
import GuestHeader from "../GuestHeader/GuestHeader";
import LogoHeader from "../LogoHeader/LogoHeader";
import AuthHeader from "../AuthHeader/AuthHeader";
import useSegment from "@/hooks/useSegment";

const Header: React.FC = () => {
  const { token } = useToken();
  const { isAdmin } = useSegment();

  if (isAdmin) return null;

  return (
    <header className="p-3 shadow-sm shadow-lightgray sm:px-5">
      <div className="flex items-center justify-between mx-auto md:max-w-[860px] xl:max-w-[1200px]">
        <LogoHeader />
        {token ? <AuthHeader /> : <GuestHeader />}
      </div>
    </header>
  );
};

export default Header;
