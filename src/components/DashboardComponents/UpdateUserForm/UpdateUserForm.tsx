import { useUser } from "@/context/UserContext/UserContext";
import { IUserUpdate } from "@/helpers/validateForms/types";
import { validateUpdateUser } from "@/helpers/validateForms/validateUpdateUser";
import { fetchUpdateUser } from "@/services/fetchUpdateUser";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import React from "react";

export const UpdateUserForm: React.FC = (): React.ReactElement => {

    const { user, setUser, handleCloseModal } = useUser();

    if (!user) return <div></div>;

    return (

        <Formik
            initialValues={{ name: '', email: '', idNumber: '' }}
            validate={(values) => validateUpdateUser(values, user.email, user.idNumber)}
            onSubmit={async (userData, { resetForm }) => {

                const data = await fetchUpdateUser(user?.id, userData);

                setUser(data);

                resetForm();

                handleCloseModal();

            }}
        >
            {
                ({ errors, touched }: FormikProps<IUserUpdate>) => (
                    <Form className="flex flex-col gap-5">
                        <div>
                            <Field className="inputUpdateUser" type="text" name="name" placeholder="Nombre completo..." />
                            {errors.name && touched.name && (
                                <ErrorMessage className="inputMessageError" name="name" component="p" />
                            )}
                        </div>
                        <div>
                            <Field className="inputUpdateUser" type="email" name="email" placeholder="Correo electrónico..." />
                            {errors.email && touched.email && (
                                <ErrorMessage className="inputMessageError" name="email" component="p" />
                            )}
                        </div>
                        <div>
                            <Field className="inputUpdateUser" type="text" name="idNumber" placeholder="N° de documento..." />
                            {errors.idNumber && touched.idNumber && (
                                <ErrorMessage className="inputMessageError" name="idNumber" component="p" />
                            )}
                        </div>
                        <button className="h-[40px] bg-violet text-whitePage font-poppins font-bold transition-all hover:bg-violetHover" type="submit">MODIFICAR DATOS</button>
                    </Form>
                )
            }
        </Formik>

    );

};

export default UpdateUserForm;