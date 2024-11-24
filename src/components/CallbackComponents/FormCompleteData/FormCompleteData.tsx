"use client";

import { Form, Formik } from "formik";
import React, { useEffect } from "react";

export const FormCompleteData: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <Formik
      initialValues={{ idNumber: "", password: "", repeatPassword: "" }}
      validate={() => {}}
      onSubmit={() => {}}
    >
      {({}) => <Form></Form>}
    </Formik>
  );
};

export default FormCompleteData;
