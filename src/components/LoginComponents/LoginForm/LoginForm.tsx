"use client";

import ButtonForm from "@/components/GeneralComponents/ButtonForm/ButtonForm";
import { Field, Form, Formik } from "formik";
import React from "react";
import Link from "next/link";
import { validateLogin } from "@/helpers/validateForms/validateLogin";
import { fetchLoginUser } from "@/services/fetchLoginUser";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useToken } from "@/context/TokenContext/TokenContext";
import { useUser } from "@/context/UserContext/UserContext";

export const LoginForm: React.FC = (): React.ReactElement => {
  const router = useRouter();
  const { setToken } = useToken();
  const { setUser } = useUser();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validateLogin}
      onSubmit={async (userData, { resetForm }) => {
        const data = await fetchLoginUser(userData);

        if (data) {
          localStorage.setItem("userToken", JSON.stringify(data.token));
          localStorage.setItem("userData", JSON.stringify(data.user));
          Cookies.set("userData", JSON.stringify(data.user));
          Cookies.set("userToken", data.token);
          setToken(data.token);
          setUser(data.user);

          router.push("/");
        }

        resetForm();
      }}
    >
      {() => (
        <Form className="flex flex-col gap-5">
          <div>
            <Field
              className="input"
              type="email"
              name="email"
              placeholder="Correo electrónico..."
            />
          </div>
          <div>
            <Field
              className="input"
              type="password"
              name="password"
              placeholder="Contraseña..."
            />
          </div>
          <ButtonForm name="INICIAR SESIÓN" />
          <p className="text-center text-sm">
            ¿No tenés una cuenta?{" "}
            <Link
              className="text-violet underline hover:no-underline"
              href="/register"
            >
              Registrate acá
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
