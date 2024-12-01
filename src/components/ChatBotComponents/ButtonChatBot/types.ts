import { MutableRefObject } from "react";

export interface IButtonChatBotProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    chatButtonRef: MutableRefObject<HTMLDivElement | null>;
};