"use client";

import { fetchCodeVerifyEmail } from "@/services/fetchRegisterUser";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const CodeVerification: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const code = searchParams.get("code");

  useEffect(() => {
    const verifyCode = async () => {
      if (!email || !code) {
        Swal.fire({
          icon: "error",
          title: "Error de verificación",
          text: !email
            ? "Falta el correo electrónico para verificar."
            : "Falta el código de verificación.",
          confirmButtonText: "Intentar de nuevo",
        });
        return;
      }

      try {
        await fetchCodeVerifyEmail(email, code);

        Swal.fire({
          icon: "success",
          title: "¡Verificación exitosa!",
          text: "Tu dirección de correo electrónico ha sido verificada correctamente.",
          confirmButtonText: "Aceptar",
        }).then(() => router.push("/login"));
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Código de verificación incorrecto",
          text: error instanceof Error ? error.message : "Hubo un problema con la verificación.",
          confirmButtonText: "Intentar de nuevo",
        });
      }
    };

    verifyCode();
  }, [email, code, router]);

  return (
    <main className="flex items-center justify-center h-screen">
      <p className="text-lg font-medium text-gray-700">Verificando código, por favor espera...</p>
    </main>
  );
};

export default CodeVerification;
