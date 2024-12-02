import { IMessage } from "@/interfaces/IMessage";
import { Dispatch, SetStateAction } from "react";
import { Socket } from "socket.io-client";

export interface IFormChatBotProps {
    socket: Socket | null;
    setMessages: Dispatch<SetStateAction<IMessage[]>>;
};