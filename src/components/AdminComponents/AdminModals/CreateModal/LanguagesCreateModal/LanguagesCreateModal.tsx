import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ICreateModalProps } from "../types";
import { useAdminContext } from "@/context/AdminContext/AdminContext";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import Swal from "sweetalert2";
import Image from "next/image";
import { ICreateLanguage } from "@/interfaces/ILanguage";
import { useLanguageAdminContext } from "@/context/Admin/LanguageAdminContext/LanguageAdminContext";
import { validateLanguagesCreateModal } from "./valuesLanguagesCreateModal";
import Loading from "@/components/GeneralComponents/Loading/Loading";
import { useToken } from "@/context/TokenContext/TokenContext";

const LanguagesCreateModal: React.FC<ICreateModalProps> = ({ closeCreateModal }) => {
  const { title } = useAdminContext();
  const { createLanguage } = useLanguageAdminContext();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [flagPreview, setFlagPreview] = useState<string | null>(null);
  const [countryPhotoPreview, setCountryPhotoPreview] = useState<string | null>(null);
  const { token } = useToken();

  const handleOnSubmit = async (values: ICreateLanguage) => {
    console.log(values);

    try {
      createLanguage(values);
      Swal.fire({
        title: "¡Lenguaje Creado!",
        text: "El lenguaje se ha creado exitosamente.",
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
      console.error("Error al crear el lenguaje:", error);

      Swal.fire({
        title: "Error",
        text: "Hubo un problema al crear el lenguaje. Intenta nuevamente.",
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

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: File | null) => void,
    fieldName: string,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFieldValue(fieldName, file);
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
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
          path: "",
          name: "",
          general_description: "",
          brief_description: "",
          image_url: null,
          flag_url: null,
          country_photo: null,
          token: token,
        }}
        validate={(values) =>
          validateLanguagesCreateModal(values, imagePreview, flagPreview, countryPhotoPreview)
        }
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="bg-whitePage space-y-4 p-6 border border-lightgray rounded shadow-lg w-[90vw] max-w-[400px] overflow-y-auto h-[90vh] max-h-[max-content] sm:text-[16px] sm:max-w-[460px]">
            <Subtitle label={`Crear ${title}`} />

            <div>
              <label
                htmlFor="path"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Ruta:
              </label>
              <div className="flex flex-col gap-2">
                <Field
                  id="path"
                  name="path"
                  type="text"
                  placeholder="Example: english"
                  className="inputUpdateUser"
                />
                <ErrorMessage
                  name="path"
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Nombre:
              </label>
              <div className="flex flex-col gap-2">
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nombre del Lenguaje"
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
                htmlFor="image_url"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Imagen de tarjeta:
              </label>
              <div className="flex flex-col gap-2">
                <input
                  id="image_url"
                  name="image_url"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageChange(e, setFieldValue, "image_url", setImagePreview)
                  }
                  className="text-[14px]"
                />
                {imagePreview && (
                  <div className="mt-2 w-full h-[200px] relative">
                    <Image
                      src={imagePreview}
                      alt="Vista previa"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                )}
                <ErrorMessage
                  name="image_url"
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="flag_url"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Imagen de bandera del país:
              </label>
              <div className="flex flex-col gap-2">
                <input
                  id="flag_url"
                  name="flag_url"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setFieldValue, "flag_url", setFlagPreview)}
                  className="text-[14px]"
                />
                {flagPreview && (
                  <div className="mt-2 w-full h-[200px] relative">
                    <Image
                      src={flagPreview}
                      alt="Vista previa"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                )}
                <ErrorMessage
                  name="image_url"
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="country_photo"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Imagen representativa del país:
              </label>
              <div className="flex flex-col gap-2">
                <input
                  id="country_photo"
                  name="country_photo"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageChange(e, setFieldValue, "country_photo", setCountryPhotoPreview)
                  }
                  className="text-[14px]"
                />
                {countryPhotoPreview && (
                  <div className="mt-2 w-full h-[200px] relative">
                    <Image
                      src={countryPhotoPreview}
                      alt="Vista previa"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                )}
                <ErrorMessage
                  name="image_url"
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="general_description"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Descripción General:
              </label>
              <div className="flex flex-col gap-2">
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
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="brief_description"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Descripción Breve:
              </label>
              <div className="flex flex-col gap-2">
                <Field
                  as="textarea"
                  id="brief_descriptionn"
                  name="brief_description"
                  placeholder="Descripción Breve del Lenguaje"
                  rows={6}
                  className="inputUpdateUser resize-x-none p-2 min-h-[160px] sm:min-h-[200px]"
                />
                <ErrorMessage
                  name="brief_description"
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
                {isSubmitting ? <Loading /> : "Crear Nuevo"}
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

export default LanguagesCreateModal;
