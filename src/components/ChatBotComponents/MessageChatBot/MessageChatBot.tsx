import React from "react";
import { IMessageChatBotProps } from "./types";

export const MessageChatBot: React.FC<IMessageChatBotProps> = ({
  messages,
}) => {
  return (
    <div className="w-full p-1 min-h-[250px] max-h-[250px] bg-whitePage overflow-auto scrollY">
      {messages.map((msg, i) => (
        <div key={i}>
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`p-2 rounded-lg max-w-xs flex gap-2 ${
                msg.sender === "user"
                  ? "bg-violet text-whitePage"
                  : "bg-lightgray text-blackPage"
              }`}
            >
              <strong
                className={
                  msg.sender === "user" ? "text-lightgray" : "text-blackPage"
                }
              >
                {msg.sender === "user" ? "Tu: " : "Bot: "}
              </strong>
              <p>{msg.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageChatBot;
