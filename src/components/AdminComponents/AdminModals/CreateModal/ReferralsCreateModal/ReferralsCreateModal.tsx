import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import Swal from "sweetalert2";
import { ICreateReferral } from "@/interfaces/IReferral";
import { useUser } from "@/context/UserContext/UserContext";
import { validateReferralsCreateModal } from "./valuesReferralsCreateModal";
import { ICreateModalProps } from "../types";
import { useReferralsAdminContext } from "@/context/Admin/ReferralAdminContext/ReferralAdminContext";
const CoursesCreateModal: React.FC<ICreateModalProps> = ({ closeCreateModal }) => {
  const { user } = useUser();
  const { createReferral } = useReferralsAdminContext();

  const handleOnSubmit = async (values: ICreateReferral) => {
    const convertedValues = {
      ...values,
      discount: Number(values.discount),
      expiration: Number(values.expiration),
    };

    try {
      console.log(convertedValues);

      createReferral(convertedValues);
      Swal.fire({
        title: "¡Cupón de Referido Creado!",
        text: "El cupón de referido se ha creado exitosamente.",
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
      console.error("Error al crear el cupón de referido:", error);

      Swal.fire({
        title: "Error",
        text: "Hubo un problema al crear el cupón de referido. Intenta nuevamente.",
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

  if (!user?.id) throw new Error("ID de Entidad invalido");

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <Formik
        initialValues={{
          quantity: 1,
          issuer: user?.id,
          discount: 10,
          expiration: 1,
        }}
        validate={validateReferralsCreateModal}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-whitePage mt-[2vh] space-y-4 p-6 border border-lightgray rounded shadow-lg w-[90vw] max-w-[400px] overflow-y-auto h-[70vh] max-h-[max-content] sm:text-[16px] sm:max-w-[460px]">
            <Subtitle label="Generar código de referido" />

            <div>
              <label
                htmlFor="quantity"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Cantidad:
              </label>
              <div className="flex flex-col gap-2">
                <Field
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  placeholder="Cantidad de códigos de referido"
                  className="inputUpdateUser"
                />
                <ErrorMessage
                  name="quantity"
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="discount"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Descuento:
              </label>
              <div className="flex flex-col gap-2">
                <Field id="discount" name="discount" as="select" className="inputUpdateUser">
                  <option value="" disabled>
                    Selecciona un descuento
                  </option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                  <option value="30">30%</option>
                  <option value="40">40%</option>
                  <option value="50">50%</option>
                  <option value="60">60%</option>
                  <option value="75">75%</option>
                  <option value="80">80%</option>
                  <option value="90">90%</option>
                  <option value="100">100%</option>
                </Field>
                <ErrorMessage
                  name="discount"
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="expiration"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Expiración:
              </label>
              <div className="flex flex-col gap-2">
                <Field id="expiration" name="expiration" as="select" className="inputUpdateUser">
                  <option value="" disabled>
                    Selecciona un tiempo de expiración
                  </option>
                  <option value="1">1 Día</option>
                  <option value="7">1 Semana</option>
                  <option value="30">1 Mes</option>
                  <option value="60">2 Meses</option>
                  <option value="90">3 Meses</option>
                  <option value="180">6 Meses</option>
                  <option value="365">1 Año</option>
                </Field>
                <ErrorMessage
                  name="expiration"
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

export default CoursesCreateModal;
