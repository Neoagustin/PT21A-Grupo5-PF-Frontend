"use client";
import React, { useEffect, useRef, useState } from "react";
import useSegment from "@/hooks/useSegment";
import { io, Socket } from "socket.io-client";
import { useToken } from "@/context/TokenContext/TokenContext";
import FormChatBot from "../FormChatBot/FormChatBot";
import HeaderChatBot from "../HeaderChatBot/HeaderChatBot";
import ButtonChatBot from "../ButtonChatBot/ButtonChatBot";
import MessageChatBot from "../MessageChatBot/MessageChatBot";
import { IMessage } from "@/interfaces/IMessage";
import { useUser } from "@/context/UserContext/UserContext";

const socketURL = "https://pt21a-grupo5-pf-backend.onrender.com/chat";

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<number>(window.innerHeight - 250);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const chatButtonRef = useRef<HTMLDivElement | null>(null);
  const { token } = useToken();
  const { isAdmin } = useSegment();
  const { user } = useUser();
  const { segment } = useSegment();

  useEffect(() => {
    const updateMaxHeight = () => setMaxHeight(window.innerHeight - 250);
    window.addEventListener("resize", updateMaxHeight);

    const handleClickOutside = (e: MouseEvent) => {
      if (
        chatRef.current &&
        !chatRef.current.contains(e.target as Node) &&
        chatButtonRef.current &&
        !chatButtonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    if (token) {
      const newSocket = io(socketURL, {
        auth: { token },
        transports: ["websocket", "polling"],
      });
      setSocket(newSocket);
      newSocket.on("message", (message: string) => {
        setMessages((prev) => [...prev, { sender: "bot", content: message }]);
      });
      newSocket.on("response-message", (message: string) => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", content: `Bot: ${message}` },
        ]);
      });
      newSocket.on("disconnect", () => {
        console.warn("Desconectado del servidor Socket.IO");
      });
      return () => {
        newSocket.disconnect();
      };
    }
  }, [token]);

  if (
    isAdmin ||
    !token ||
    user?.role === "admin" ||
    user?.role === "teacher" ||
    segment === "code-verification"
  )
    return null;

  return (
    <>
      <ButtonChatBot
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        chatButtonRef={chatButtonRef}
      />

      <div
        ref={chatRef}
        style={{
          maxHeight: isOpen ? maxHeight : 0,
        }}
        className={`w-[300px] transition-all overflow-y-auto duration-500 shadow-md shadow-gray rounded-md fixed right-3 bottom-24 bg-violet overflow-hidden scrollY`}
      >
        <HeaderChatBot />
        <div className="p-3 bg-whitePage">
          <MessageChatBot messages={messages} />
        </div>
        <div className="border-t border-lightgray sticky bottom-0">
          <FormChatBot socket={socket} setMessages={setMessages} />
        </div>
      </div>
    </>
  );
};

export default ChatBot;
