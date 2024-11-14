import React from "react";
import UserHeader from "./UserHeader/UserHeader";
import UserMenu from "./UserMenu/UserMenu";
const AuthHeader: React.FC = () => {
  return (
    <div className="relative">
      <UserHeader />
      <UserMenu />
    </div>
  );
};

export default AuthHeader;
