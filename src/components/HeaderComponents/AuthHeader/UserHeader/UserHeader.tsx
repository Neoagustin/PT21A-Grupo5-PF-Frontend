import { useUser } from "@/context/UserContext/UserContext";
import { useUserMenu } from "@/context/UserMenuContext/UserMenuContext";
import { faChevronDown, faUser, faUserShield, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UserHeader = () => {
  const { user, isAdmin, isTeacher } = useUser();
  const { toggleModal } = useUserMenu();

  const icon = isAdmin ? faUserShield : isTeacher ? faUserTie : faUser;
  const color = isAdmin ? "bg-blackPage" : isTeacher ? "bg-skyblue" : "bg-violet";

  return (
    <div
      onClick={toggleModal}
      className="flex items-center space-x-1.5 cursor-pointer select-none group p-1"
    >
      <div className={`flex items-center justify-center rounded-full w-[34px] h-[34px] p-[8px] ${color} sm:w-[36px] sm:h-[36px]`}>
        <FontAwesomeIcon
          icon={icon}
          className="text-lg text-whitePage w-[18px] text-[18px] sm:text-[20px]"
        />
      </div>

      <p className="text-[14px] text-blackPage group-hover:text-violet sm:text-[16px]">
        {user?.name}
      </p>
      <div className="text-darkgray group-hover:text-violet">
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-[14px] text-gray-500 sm:text-[16px]"
        />
      </div>
    </div>
  );
};

export default UserHeader;
