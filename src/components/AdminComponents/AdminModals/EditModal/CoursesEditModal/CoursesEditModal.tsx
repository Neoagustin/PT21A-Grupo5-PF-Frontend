import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ICoursesEditModalProps } from "./types";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import { IEditUserFormValues } from "@/interfaces/IUser";
import Swal from "sweetalert2";
import { useAdminContext } from "@/context/AdminContext/AdminContext";
import { useCoursesAdminContext } from "@/context/Admin/CoursesAdminContext/CoursesAdminContext";

const CoursesEditModal: React.FC<ICoursesEditModalProps> = ({ data, onClose }) => {
  const {} = useCoursesAdminContext();
  const { title } = useAdminContext();

  const handleOnSubmit = (values: IEditUserFormValues) => {
    try {
      Swal.fire({
        title: "¡Éxito!",
        text: "Los cambios se han guardado correctamente.",
        icon: "success",
        showConfirmButton: false,
        timer: 1300,
        timerProgressBar: true,
      });

      onClose();
    } catch (error) {
      console.error("Error al actualizar el Curso:", error);

      Swal.fire({
        title: "Error",
        text: "Hubo un problema al guardar los cambios. Intenta nuevamente.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#FF5252",
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
          title: data.title || "",
          specialization: data.specialization || "",
          level: data.level || "",
        }}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting, values }) => (
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
                Titulo:
              </label>
              <Field
                id="title"
                name="title"
                type="text"
                placeholder="Titulo del Curso"
                className="inputUpdateUser"
              />
              <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label
                htmlFor="specialization"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Especialización:
              </label>
              <Field
                id="specialization"
                name="specialization"
                as="select"
                value={values.state}
                className="inputUpdateUser"
              >
                <option value="viajes" label="Viajes" />
                <option value="conversación" label="Conversación" />
                <option value="trabajo" label="Trabajo" />
                <option value="legal" label="Legal" />
                <option value="it" label="IT" />
              </Field>
              <ErrorMessage name="state" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label
                htmlFor="level"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Nivel:
              </label>
              <Field
                id="level"
                name="level"
                as="select"
                value={values.state}
                className="inputUpdateUser"
              >
                <option value="A1 - Elementary" label="A1 - Elementary" />
                <option value="A2 - Pre-intermediate" label="A2 - Pre-intermediate" />
                <option value="B1 - Intermediate" label="B1 - Intermediate" />
                <option value="B2 - Upper-intermediate" label="B2 - Upper-intermediate" />
                <option value="C1 - Advanced" label="C1 - Advanced" />
                <option value="C2 - Proficiency" label="C2 - Proficiency" />
              </Field>
              <ErrorMessage name="state" component="div" className="text-red-500 text-sm" />
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

export default CoursesEditModal;
