"use client";
import React, { useEffect, useRef, useState } from "react";
import useSegment from "@/hooks/useSegment";
import { io, Socket } from "socket.io-client";
import { useToken } from "@/context/TokenContext/TokenContext";
import FormChatBot from "../FormChatBot/FormChatBot";
import HeaderChatBot from "../HeaderChatBot/HeaderChatBot";
import ButtonChatBot from "../ButtonChatBot/ButtonChatBot";

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<number>(window.innerHeight - 250);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const chatButtonRef = useRef<HTMLDivElement | null>(null);
  const { token } = useToken();

  const { isAdmin } = useSegment();

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
      const newSocket = io(process.env.WS_URL, {
        auth: { token },
        query: { language: "english" },
        transports: ["websocket"],
      });
      setSocket(newSocket);
      newSocket.on("message", (message: string) => {
        setMessages((prev) => [...prev, message]);
      });
      newSocket.on("response-message", (message: string) => {
        setMessages((prev) => [...prev, `Bot: ${message}`]);
      });
      newSocket.on("disconnect", () => {
        console.warn("Desconectado del servidor Socket.IO");
      });
      return () => {
        newSocket.disconnect();
      };
    }
  }, [token]);

  if (isAdmin || !token) return null;

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
        className={`w-[300px] transition-all overflow-y-auto duration-500 shadow-md shadow-gray rounded-md fixed right-3 bottom-24 bg-violet overflow-hidden scrollYNone`}
      >
        <HeaderChatBot />
        <div className="w-full min-h-[250px] max-h-[250px] bg-whitePage p-3 overflow-auto scrollY">
          {messages.map((msg, i) => (
            <div key={i}>{msg}</div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-lightgray"></div>
        <FormChatBot socket={socket} setMessages={setMessages} />
      </div>
    </>
  );
};

export default ChatBot;
