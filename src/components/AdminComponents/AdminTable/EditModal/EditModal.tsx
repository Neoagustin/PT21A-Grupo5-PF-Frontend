import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { IFormValues, IEditModalProps } from "./types";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";

const EditModal: React.FC<IEditModalProps> = ({ data, onClose }) => {
  const handleOnSubmit = (values: IFormValues) => {
    console.log("Datos enviados:", values);
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
          email: data.email || "",
          idNumber: data.idNumber || "",
          rol: data.role || "user",
          plan: data.membership.subscription.name.toLowerCase() || "",
          state: data.isActive ? "active" : "inactive",
        }}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form
            className="bg-whitePage space-y-4 p-6 border border-lightgray rounded shadow-lg w-[90vw] max-w-[400px] overflow-y-auto h-[90vh] max-h-[max-content]
            sm:text-[16px] sm:max-w-[460px]"
          >
            <Subtitle label="Editar Usuario" />
            <div>
              <label
                htmlFor="name"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Nombre Completo:
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Nombre completo"
                className="inputUpdateUser"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label
                htmlFor="email"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Correo:
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Correo electrónico"
                className="inputUpdateUser"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label
                htmlFor="idNumber"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Número de identificación:
              </label>
              <Field
                id="idNumber"
                name="idNumber"
                type="text"
                placeholder="Número de identificación"
                className="inputUpdateUser"
              />
              <ErrorMessage name="idNumber" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label
                htmlFor="rol"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Rol:
              </label>
              <Field
                id="rol"
                name="rol"
                as="select"
                value={values.rol}
                className={`inputUpdateUser ${
                  values.rol === "teacher"
                    ? "text-skyblue font-semibold border-skyblue hover:border-skyblueHover hover:text-skyblueHover focus:border-skyblueHover focus:text-skyblueHover"
                    : values.rol === "admin"
                    ? "text-blackPage font-semibold border-blackPage hover:border-blackPageHover hover:text-blackPageHover focus:border-blackPageHover focus:text-blackPageHover"
                    : "text-darkgray border-darkgray hover:border-gray hover:text-gray focus:border-gray focus:text-gray"
                }`}
              >
                <option value="user" label="Usuario" className="text-darkgray" />
                <option value="teacher" label="Profesor" className="text-skyblue font-semibold" />
                <option value="admin" label="Admin" className="text-blackPage font-semibold" />
              </Field>
              <ErrorMessage name="rol" component="div" className="text-red-500 text-sm" />
            </div>

            {values.plan && (
              <div>
                <label
                  htmlFor="plan"
                  className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
                >
                  Plan:
                </label>
                <Field
                  id="plan"
                  name="plan"
                  as="select"
                  value={values.plan}
                  className={`inputUpdateUser ${
                    values.plan === "premium"
                      ? "text-skyblue font-semibold border-skyblue hover:border-skyblueHover hover:text-skyblueHover focus:border-skyblueHover focus:text-skyblueHover"
                      : values.plan === "pro"
                      ? "text-violet font-semibold border-violet hover:border-violetHover hover:text-violetHover focus:border-violetHover focus:text-violetHover"
                      : "text-darkgray border-darkgray hover:border-gray hover:text-gray focus:border-gray focus:text-gray"
                  }`}
                >
                  <option value="standard" label="Standard" className="text-darkgray" />
                  <option value="premium" label="Premium" className="text-skyblue font-semibold" />
                  <option value="pro" label="Pro" className="text-violet font-semibold" />
                </Field>
                <ErrorMessage name="plan" component="div" className="text-red-500 text-sm" />
              </div>
            )}

            <div>
              <label
                htmlFor="estado"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Estado:
              </label>
              <Field
                id="state"
                name="state"
                as="select"
                value={values.state}
                className={`inputUpdateUser ${
                  values.state === "active"
                    ? "text-green border-green hover:border-greenHover hover:text-greenHover focus:border-greenHover focus:text-greenHover"
                    : "text-red border-red hover:border-redHover hover:text-redHover focus:border-redHover focus:text-redHover"
                }`}
              >
                <option value="active" label="Activo" className="text-green" />
                <option value="inactive" label="Inactivo" className="text-red" />
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

export default EditModal;
