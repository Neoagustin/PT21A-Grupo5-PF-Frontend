"use client";

import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const FormCompleteData: React.FC = () => {

    const router = useRouter();

    useEffect(() => {

        

    }, []);

    return (

        <Formik
            initialValues={{idNumber: '', password: '', repeatPassword: ''}}
            validate={() => {}}
            onSubmit={() => {}}
        >
            {
                ({}) => (
                    <Form>
                        
                    </Form>
                )
            }
        </Formik>

    );

};

export default FormCompleteData;