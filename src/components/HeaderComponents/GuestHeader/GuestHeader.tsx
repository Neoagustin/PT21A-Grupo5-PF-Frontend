import React from "react";
import ButtonHeader from "../ButtonHeader/ButtonHeader";

const GuestHeader = () => {
  return (
    <div className="flex gap-2 sm:gap-4">
      <ButtonHeader href="/login" label="INICIAR SESIÓN" />
      <ButtonHeader href="/register" label="REGISTRARSE" isPrimary />
    </div>
  );
};

export default GuestHeader;
