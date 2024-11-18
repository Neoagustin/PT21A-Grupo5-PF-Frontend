"use client";

import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import { useUser } from "@/context/UserContext/UserContext";
import { IChangePassword } from "@/helpers/validateForms/types";
import { validateChangePassword } from "@/helpers/validateForms/validateChangePassword";
import { fetchChangePassword } from "@/services/fetchChangePassword";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import React from "react";

export const ChangePassword: React.FC = (): React.ReactElement => {

    const { user } = useUser();

    console.log(user)

    if (!user) return <div></div>;

    return (

        <div className="w-full flex flex-col gap-5 xl:w-[626px]">
            <Subtitle label="Cambiar contraseña:" />
            <Formik
                initialValues={{ password: '', newPassword: '' }}
                validate={(values) => validateChangePassword(values)}
                onSubmit={async (userData, { resetForm }) => {

                    const data = await fetchChangePassword(user.id, userData);

                    console.log(data)

                    resetForm();

                }}
            >
                {
                    ({ errors, touched }: FormikProps<IChangePassword>) => (
                        <Form className="w-full flex flex-col gap-5 xl:w-[626px]">
                            <div>
                                <Field className="inputChangePassword" type="password" name="password" placeholder="Contraseña..." />
                                {errors.password && touched.password && (
                                    <ErrorMessage className="inputMessageError" name="password" component="p" />
                                )}
                            </div>
                            <div>
                                <Field className="inputChangePassword" type="password" name="newPassword" placeholder="Nueva contraseña..." />
                                {errors.newPassword && touched.newPassword && (
                                    <ErrorMessage className="inputMessageError" name="newPassword" component="p" />
                                )}
                            </div>
                            <button className="w-[152px] h-[36px] text-sm font-bold border-[1px] border-transparent rounded-[4px] self-center bg-violet transition-all text-whitePage sm:w-[230px] sm:h-[38px] hover:border-violet hover:text-violet hover:bg-whitePage" type="submit">CONFIRMAR</button>
                        </Form>
                    )
                }
            </Formik>
        </div>

    );

};

export default ChangePassword;