"use client";

import ButtonForm from "@/components/GeneralComponents/ButtonForm/ButtonForm";
import { Field, Form, Formik } from "formik";
import React from "react";
import ButtonGoogle from "../../GeneralComponents/ButtonGoogle/ButtonGoogle";
import Link from "next/link";
import { validateLogin } from "@/helpers/validateForms/validateLogin";

export const LoginForm: React.FC = (): React.ReactElement => {

    return (

        <Formik
            initialValues={{ email: '', password: '' }}
            validate={validateLogin}
            onSubmit={() => { }}
        >
            {
                ({ errors, touched }) => (
                    <Form className="flex flex-col gap-5">
                        <div>
                            <Field className='input' type='email' name='email' placeholder='Correo electrónico...' />
                        </div>
                        <div>
                            <Field className='input' type='password' name='password' placeholder='Contraseña...' />
                        </div>
                        <ButtonForm name="INICIAR SESIÓN" />
                        <div className="flex items-center justify-between">
                            <div className="w-[90px] h-[1px] bg-gray sm:w-[150px]"></div>
                            <h6 className="text-gray text-xs font-light">Inicia sesión con Google</h6>
                            <div className="w-[90px] h-[1px] bg-gray sm:w-[150px]"></div>
                        </div>
                        <ButtonGoogle name="Inicia sesión con google" />
                        <p className="text-center">¿No tenés una cuenta? <Link className="text-violet underline hover:no-underline" href='/register'>Registrate acá</Link></p>
                    </Form>
                )
            }
        </Formik>

    );

};

export default LoginForm;