"use client";

import { fetchCodeVerifyEmail } from "@/services/fetchRegisterUser";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PinField from "react-pin-field";
import Swal from "sweetalert2";

const CodeVerification = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const handleSubmit = async () => {
    try {
      if (!email) throw new Error("Email inválido.");

      await fetchCodeVerifyEmail(email, code);

      Swal.fire({
        icon: "success",
        title: "¡Verificación exitosa!",
        text: "Tu dirección de correo electrónico ha sido verificada correctamente.",
        confirmButtonText: "Aceptar",
      });

      router.push("/login");
    } catch (err: unknown) {
      Swal.fire({
        icon: "error",
        title: "Código de verificación incorrecto",
        confirmButtonText: "Intentar de nuevo",
      });

      throw new Error(err instanceof Error ? err.message : String(err));
    }
  };

  return (
    <main className="flex items-center justify-center h-[80vh] px-3">
      <div
        className="
      border border-lightgray p-6 rounded-md shadow-xl w-full max-w-[360px] 
      sm:max-w-[400px]
      sm:
      "
      >
        <div className="h-[140px] sm:h-[120px]">
          <h1
            className="text-[18px] font-semibold mb-2 text-center
          sm:text-[22px]
          "
          >
            Verifica tu Dirección de Email
          </h1>
          <p
            className="text-[14px] text-darkgray mb-0 
          sm:text-[16px] sm:text-center
          "
          >
            Te enviamos un código de ocho dígitos a tu correo electrónico. Ingresa el código a
            continuación para confirmar tu dirección.
          </p>
        </div>
        <div className="flex my-7 justify-center">
          <PinField
            length={8}
            validate={/^[a-zA-Z0-9]$/}
            className="w-[100%] h-8 text-center mx-1 text-lg border rounded-lg shadow-lg border-gray-300 focus:ring-2 focus:ring-skyblue focus:outline-none transition-all duration-300
            sm:h-10
            "
            onComplete={setCode}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Verificar Código
        </button>
      </div>
    </main>
  );
};

export default CodeVerification;
