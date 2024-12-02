import { faHeadset, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IButtonChatBotProps } from "./types";

export const ButtonChatBot: React.FC<IButtonChatBotProps> = ({
  isOpen,
  setIsOpen,
  chatButtonRef,
}) => {
  const handleToggleChat = () => setIsOpen(!isOpen);

  return (
    <div
      ref={chatButtonRef}
      onClick={handleToggleChat}
      className="z-20 fixed bottom-3 right-3 w-16 h-16 rounded-full bg-violet text-whitePage flex justify-center items-center text-3xl cursor-pointer transition-all"
    >
      <div
        className={`absolute transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <FontAwesomeIcon icon={faHeadset} />
      </div>
      <div
        className={`absolute transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};

export default ButtonChatBot;
