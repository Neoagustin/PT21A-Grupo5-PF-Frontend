"use client";

import ButtonForm from "@/components/GeneralComponents/ButtonForm/ButtonForm";
import { validateRegister } from "@/helpers/validateForms/validateRegister";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import React from "react";
import Link from "next/link";
import { fetchRegisterUser } from "@/services/fetchRegisterUser";
import { IUserRegister } from "@/helpers/validateForms/types";
import Swal from "sweetalert2";

export const RegisterForm: React.FC = (): React.ReactElement => {
  return (
    <Formik
      initialValues={{ name: "", email: "", idNumber: "", password: "", repeatPassword: "" }}
      validate={validateRegister}
      onSubmit={async (userData, { resetForm }) => {
        try {
          const data = await fetchRegisterUser(userData);

          if (data) {
            Swal.fire({
              icon: "success",
              title: "¡Correo enviado!",
              text: `Te hemos enviado un correo a ${userData.email} con un código para verificar tu cuenta.`,
              confirmButtonText: "Aceptar",
            });
          } else {
            throw new Error("Error al registrar el usuario.");
          }
        } catch (error) {
          if (typeof error === "string") {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error,
              confirmButtonText: "Aceptar",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error instanceof Error ? error.message : "Ocurrió un error inesperado.",
              confirmButtonText: "Aceptar",
            });
          }
        } finally {
          resetForm();
        }
      }}
    >
      {({ errors, touched }: FormikProps<IUserRegister>) => (
        <Form className="flex flex-col gap-5">
          <div>
            <Field
              className={`input ${touched.name && (errors.name ? "inputError" : "inputSuccess")}`}
              type="text"
              name="name"
              placeholder="Nombre completo..."
            />
            {errors.name && touched.name && (
              <ErrorMessage className="inputMessageError" name="name" component="p" />
            )}
          </div>
          <div>
            <Field
              className={`input ${touched.email && (errors.email ? "inputError" : "inputSuccess")}`}
              type="email"
              name="email"
              placeholder="Correo electrónico..."
            />
            {errors.email && touched.email && (
              <ErrorMessage className="inputMessageError" name="email" component="p" />
            )}
          </div>
          <div>
            <Field
              className={`input ${
                touched.idNumber && (errors.idNumber ? "inputError" : "inputSuccess")
              }`}
              type="text"
              name="idNumber"
              placeholder="Número de documento..."
            />
            {errors.idNumber && touched.idNumber && (
              <ErrorMessage className="inputMessageError" name="idNumber" component="p" />
            )}
          </div>
          <div>
            <Field
              className={`input ${
                touched.password && (errors.password ? "inputError" : "inputSuccess")
              }`}
              type="password"
              name="password"
              placeholder="Contraseña..."
            />
            {errors.password && touched.password && (
              <ErrorMessage className="inputMessageError" name="password" component="p" />
            )}
          </div>
          <div>
            <Field
              className={`input ${
                touched.repeatPassword && (errors.repeatPassword ? "inputError" : "inputSuccess")
              }`}
              type="password"
              name="repeatPassword"
              placeholder="Repetir contraseña..."
            />
            {errors.repeatPassword && touched.repeatPassword && (
              <ErrorMessage className="inputMessageError" name="repeatPassword" component="p" />
            )}
          </div>
          <ButtonForm name="REGISTRATE" />
          <p className="text-center text-sm">
            ¿Ya tenés una cuenta?{" "}
            <Link className="text-violet underline hover:no-underline" href="/login">
              Inicia sesión acá
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
