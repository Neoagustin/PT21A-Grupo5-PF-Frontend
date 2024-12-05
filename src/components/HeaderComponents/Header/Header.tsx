"use client";

import { useToken } from "@/context/TokenContext/TokenContext";
import GuestHeader from "../GuestHeader/GuestHeader";
import LogoHeader from "../LogoHeader/LogoHeader";
import AuthHeader from "../AuthHeader/AuthHeader";
import Menu from "../Menu/Menu";
import useSegment from "@/hooks/useSegment";

const Header: React.FC = () => {
  const { token } = useToken();
  const { isAdmin, segment } = useSegment();

  if (isAdmin) return null;

  if (segment === "code-verification") return null;

  return (
    <header className="p-3 shadow-sm bg-whitePage shadow-lightgray sticky top-0 z-50 sm:px-5">
      <div className="flex flex-col gap-3 justify-between mx-auto md:max-w-[860px] xl:max-w-[1200px]">
        <LogoHeader />
        <div className="flex justify-between items-center">
          <Menu />
          {token ? <AuthHeader /> : <GuestHeader />}
        </div>
      </div>
    </header>
  );
};

export default Header;
