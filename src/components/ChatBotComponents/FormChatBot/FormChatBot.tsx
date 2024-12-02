import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Form, Formik } from "formik";
import React from "react";
import { IFormChatBotProps } from "./types";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { validateChatBot } from "@/helpers/validateForms/validateChatBot";

export const FormChatBot: React.FC<IFormChatBotProps> = ({
  socket,
  setMessages,
}: IFormChatBotProps) => {
  return (
    <Formik
      initialValues={{ message: "" }}
      validate={validateChatBot}
      onSubmit={(values, { resetForm }) => {
        if (socket) {
          socket.emit("message", values.message);
          setMessages((prev) => [
            ...prev,
            { sender: "user", content: values.message },
          ]);
          resetForm();
        }
      }}
    >
      <Form>
        <div className="flex">
          <Field
            className="w-full p-3 outline-none"
            type="text"
            name="message"
            placeholder="Escribe un mensaje..."
          />
          <button
            className="w-[50px] text-violet bg-whitePage text-lg transition-all hover:text-xl"
            type="submit"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormChatBot;
