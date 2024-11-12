"use client";

import ButtonForm from "@/components/GeneralComponents/ButtonForm/ButtonForm";
import { Field, Form, Formik, FormikProps } from "formik";
import React from "react";
import Link from "next/link";
import { validateLogin } from "@/helpers/validateForms/validateLogin";
import { fetchLoginUser } from "@/services/fetchLoginUser";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { IUserLogin } from "@/helpers/validateForms/types";

export const LoginForm: React.FC = (): React.ReactElement => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validateLogin}
      onSubmit={async (userData, { resetForm }) => {
        const data = await fetchLoginUser(userData);

        if (data) {
          localStorage.setItem("userToken", JSON.stringify(data.token));
          localStorage.setItem("userData", JSON.stringify(data.user));

          Cookies.set("userToken", data.token);

          router.push("/");
        }

        resetForm();
      }}
    >
      {({ errors, touched }: FormikProps<IUserLogin>) => (
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
            <Field className="input" type="password" name="password" placeholder="Contraseña..." />
          </div>
          <ButtonForm name="INICIAR SESIÓN" />
          <p className="text-center text-sm">
            ¿No tenés una cuenta?{" "}
            <Link className="text-violet underline hover:no-underline" href="/register">
              Registrate acá
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
