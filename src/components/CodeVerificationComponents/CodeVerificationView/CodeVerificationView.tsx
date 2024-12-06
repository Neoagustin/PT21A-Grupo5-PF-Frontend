"use client";
import { fetchUserCodeVerification } from "@/services/users/users.service";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export const CodeVerificationView: React.FC = () => {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState<number>(3);
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  const code = searchParams.get("code");

  useEffect(() => {
    if (email && code) {
      const fetchVerifyCode = async () => {
        try {
          await fetchUserCodeVerification(email, code);
        } catch (error) {
          console.error("Error verificando el código:", error);
        }
      };

      fetchVerifyCode();
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      router.push("/login");
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router, email, code]);

  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-10">
      <h1 className="font-bold text-xl text-center">
        ¡Correo electrónico verificado con éxito!
      </h1>
      <div className="w-[100px] h-[100px] border-[5px] border-green rounded-full flex justify-center items-center text-5xl text-green">
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <p className="text-gray text-xs">
        Serás redirigido para iniciar sesión en: {secondsLeft} segundos.
      </p>
    </div>
  );
};

export default CodeVerificationView;
