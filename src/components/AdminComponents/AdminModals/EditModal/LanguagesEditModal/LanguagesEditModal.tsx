import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import Swal from "sweetalert2";
import { useAdminContext } from "@/context/AdminContext/AdminContext";
import { ILanguagesEditModalProps } from "./types";
import { useLanguageAdminContext } from "@/context/Admin/LanguageAdminContext/LanguageAdminContext";
import { IUpdateLanguage } from "@/interfaces/ILanguage";

const LanguagesEditModal: React.FC<ILanguagesEditModalProps> = ({ data, onClose }) => {
  const { updateLanguageById } = useLanguageAdminContext();
  const { title } = useAdminContext();

  const handleOnSubmit = (values: IUpdateLanguage) => {
    try {
      updateLanguageById(data.id, values);
      Swal.fire({
        title: "¡Éxito!",
        text: "Los cambios se han guardado correctamente.",
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

      onClose();
    } catch (error) {
      console.error("Error al actualizar el Lenguaje:", error);

      Swal.fire({
        title: "Error",
        text: "Hubo un problema al guardar los cambios. Intenta nuevamente.",
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
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <Formik
        initialValues={{
          name: data.name || "",
          general_description: data.general_description || "",
          brief_description: data.brief_description || "",
        }}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            className="bg-whitePage space-y-4 p-6 border border-lightgray rounded shadow-lg w-[90vw] max-w-[400px] overflow-y-auto h-[90vh] max-h-[max-content]
            sm:text-[16px] sm:max-w-[460px]"
          >
            <Subtitle label={`Editar ${title}`} />
            <div>
              <label
                htmlFor="name"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Nombre:
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Nombre del Lenguaje"
                className="inputUpdateUser"
              />
              <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label
                htmlFor="general_description"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Descripción General:
              </label>
              <Field
                as="textarea"
                id="general_description"
                name="general_description"
                placeholder="Descripción General del Lenguaje"
                rows={6}
                className="inputUpdateUser resize-x-none p-2 min-h-[200px] sm:min-h-[300px]"
              />
              <ErrorMessage
                name="general_description"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="brief_description"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Descripción Breve:
              </label>
              <Field
                as="textarea"
                id="brief_descriptionn"
                name="brief_description"
                placeholder="Descripción Breve del Lenguaje"
                rows={6}
                className="inputUpdateUser resize-x-none p-2 min-h-[200px] sm:min-h-[300px]"
              />
              <ErrorMessage
                name="brief_description"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col justify-between sm:flex-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-violet text-white px-4 py-2 hover:bg-violetHover text-[14px] mt-8 sm:text-[16px] transition 200"
              >
                {isSubmitting ? "Guardando..." : "Guardar Cambios"}
              </button>
              <button
                onClick={onClose}
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

export default LanguagesEditModal;
