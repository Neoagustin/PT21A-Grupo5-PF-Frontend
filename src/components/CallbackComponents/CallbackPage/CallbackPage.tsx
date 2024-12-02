"use client";

import { useToken } from "@/context/TokenContext/TokenContext";
import { useUser } from "@/context/UserContext/UserContext";
import { Form, Formik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

export const CallbackPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setToken } = useToken();
  const { setUser } = useUser();

  useEffect(() => {
    const token = searchParams.get("token");
    const user = searchParams.get("user");

    if (token && user) {
      const userObject = JSON.parse(user);
      localStorage.setItem("userToken", token);
      localStorage.setItem("userData", user);
      Cookies.set("userToken", token);
      Cookies.set("userData", user);
      setToken(token);
      setUser(userObject);
      router.push("/");
    }
  }, [searchParams, router, setToken, setUser]);

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

export default CallbackPage;
