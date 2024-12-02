import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ICreateModalProps } from "../types";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import Swal from "sweetalert2";
import { useAdminContext } from "@/context/AdminContext/AdminContext";
import { ICreateUser } from "@/interfaces/IUser";
import { useUserAdminContext } from "@/context/Admin/UserAdminContext/UserAdminContext";
import { validateUserCreateModal } from "./valuesUsersCreateModal";

const UsersCreateModal: React.FC<ICreateModalProps> = ({ closeCreateModal }) => {
  const { title } = useAdminContext();
  const { createUser } = useUserAdminContext();

  const handleOnSubmit = async (values: ICreateUser) => {
    console.log(values);

    try {
      createUser(values);
      Swal.fire({
        title: "¡Lección Creada!",
        text: "La lección se ha creado exitosamente.",
        icon: "success",
        showConfirmButton: false,
        timer: 1300,
        timerProgressBar: true,
        position: "bottom-end",
        toast: true,
        background: "#28a745",
        color: "#fff",
        showClass: {
          popup: "animate__animated animate__fadeInUp",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown",
        },
      });

      closeCreateModal();
    } catch (error) {
      console.error("Error al crear la lección:", error);

      Swal.fire({
        title: "Error",
        text: "Hubo un problema al crear la lección. Intenta nuevamente.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#FF5252",
        position: "bottom-end",
        toast: true,
        background: "#FF5252",
        color: "#fff",
        showClass: {
          popup: "animate__animated animate__fadeInUp",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown",
        },
      });
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeCreateModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <Formik
        initialValues={{
          name: "",
          email: "",
          idNumber: "",
        }}
        validate={validateUserCreateModal}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-whitePage space-y-4 p-6 border border-lightgray rounded shadow-lg w-[90vw] max-w-[400px] overflow-y-auto h-[90vh] max-h-[max-content] sm:text-[16px] sm:max-w-[460px]">
            <Subtitle label={`Crear ${title}`} />

            <div>
              <label
                htmlFor="name"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Nombre Completo:
              </label>
              <div className="flex flex-col gap-2">
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nombre Completo"
                  className="inputUpdateUser"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                E-Mail:
              </label>
              <div className="flex flex-col gap-2">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="user@example.com"
                  className="inputUpdateUser"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="idNumber"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Numero de Documento:
              </label>
              <div className="flex flex-col gap-2">
                <Field
                  id="idNumber"
                  name="idNumber"
                  type="text"
                  placeholder="Ej. 42081764"
                  className="inputUpdateUser"
                />
                <ErrorMessage
                  name="idNumber"
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between sm:flex-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-violet text-white px-4 py-2 hover:bg-violetHover text-[14px] mt-8 sm:text-[16px] transition 200"
              >
                {isSubmitting ? "Creando Nuevo..." : "Crear Nuevo"}
              </button>
              <button
                onClick={closeCreateModal}
                className="bg-darkgray text-white px-4 py-2 hover:opacity-90 text-[14px] mt-3 sm:text-[16px] sm:mt-8 transition-all duration-200"
                aria-label="Cerrar formulario"
              >
                Cerrar Menú
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UsersCreateModal;
