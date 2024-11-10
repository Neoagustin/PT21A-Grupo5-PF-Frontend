"use client";

import ButtonForm from "@/components/GeneralComponents/ButtonForm/ButtonForm";
import { validateRegister } from "@/helpers/validateForms/validateRegister";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import ButtonGoogle from "../../GeneralComponents/ButtonGoogle/ButtonGoogle";
import Link from "next/link";
import { fetchRegisterUser } from "@/services/fetchRegisterUser";

export const RegisterForm: React.FC = (): React.ReactElement => {

    return (

        <Formik
            initialValues={{ name: '', email: '', idNumber: '', password: '', repeatPassword: '' }}
            validate={validateRegister}
            onSubmit={async (userData, { resetForm }) => {

                await fetchRegisterUser(userData);

            }}
        >
            {
                ({ errors, touched }) => (
                    <Form className="flex flex-col gap-5">
                        <div>
                            <Field className={`input ${touched.name && (errors.name ? 'inputError' : 'inputSuccess')}`} type='text' name='name' placeholder='Nombre completo...' />
                            {errors.name && touched.name && <ErrorMessage className="inputMessageError" name="name" component='p' />}
                        </div>
                        <div>
                            <Field className={`input ${touched.email && (errors.email ? 'inputError' : 'inputSuccess')}`} type='email' name='email' placeholder='Correo electrónico...' />
                            {errors.email && touched.email && <ErrorMessage className="inputMessageError" name="email" component='p' />}
                        </div>
                        <div>
                            <Field className={`input ${touched.idNumber && (errors.idNumber ? 'inputError' : 'inputSuccess')}`} type='text' name='idNumber' placeholder='Número de documento...' />
                            {errors.idNumber && touched.idNumber && <ErrorMessage className="inputMessageError" name="idNumber" component='p' />}
                        </div>
                        <div>
                            <Field className={`input ${touched.password && (errors.password ? 'inputError' : 'inputSuccess')}`} type='password' name='password' placeholder='Contraseña...' />
                            {errors.password && touched.password && <ErrorMessage className="inputMessageError" name="password" component='p' />}
                        </div>
                        <div>
                            <Field className={`input ${touched.repeatPassword && (errors.repeatPassword ? 'inputError' : 'inputSuccess')}`} type='password' name='repeatPassword' placeholder='Repetir contraseña...' />
                            {errors.repeatPassword && touched.repeatPassword && <ErrorMessage className="inputMessageError" name="repeatPassword" component='p' />}
                        </div>
                        <ButtonForm name="REGISTRATE" />
                        <div className="flex items-center justify-between">
                            <div className="w-[90px] h-[1px] bg-gray sm:w-[150px]"></div>
                            <h6 className="text-gray text-xs font-light">Registrate con Google</h6>
                            <div className="w-[90px] h-[1px] bg-gray sm:w-[150px]"></div>
                        </div>
                        <ButtonGoogle name="Registrarse con google" />
                        <p className="text-center">¿Ya tenés una cuenta? <Link className="text-violet underline hover:no-underline" href='/login'>Inicia sesión acá</Link></p>
                    </Form>
                )
            }
        </Formik>

    );

};

export default RegisterForm;