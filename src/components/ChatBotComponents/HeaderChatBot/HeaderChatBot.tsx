import { useUser } from "@/context/UserContext/UserContext";
import React from "react";

export const HeaderChatBot: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="w-full h-[200px] flex p-3 flex-col justify-end gap-3">
      <h2 className="text-lightgrayTransparent text-3xl">
        Hola, {user ? `${user.name.split(" ")[0]}` : "Invitado"} 👋
      </h2>
      <p className="text-whitePage text-2xl font-bold">
        ¿Cómo podemos <br />
        ayudarte?
      </p>
    </div>
  );
};

export default HeaderChatBot;
