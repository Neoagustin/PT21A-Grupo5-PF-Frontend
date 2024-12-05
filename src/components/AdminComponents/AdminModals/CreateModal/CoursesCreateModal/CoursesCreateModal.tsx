import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ICreateModalProps } from "../types";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import { ICreateCourse, ILevel } from "@/interfaces/ICourse";
import Swal from "sweetalert2";
import { useLanguageAdminContext } from "@/context/Admin/LanguageAdminContext/LanguageAdminContext";
import { validateCoursesCreateModal } from "./valuesCoursesCreateModal";
import { useCoursesAdminContext } from "@/context/Admin/CoursesAdminContext/CoursesAdminContext";
import Image from "next/image";

const CoursesCreateModal: React.FC<ICreateModalProps> = ({ closeCreateModal }) => {
  const { allLanguages } = useLanguageAdminContext();
  const { createCourse } = useCoursesAdminContext();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const handleOnSubmit = async (values: ICreateCourse) => {
    console.log(values);

    try {
      createCourse(values);
      Swal.fire({
        title: "¡Curso Creado!",
        text: "El curso se ha creado exitosamente.",
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
      console.error("Error al crear el curso:", error);

      Swal.fire({
        title: "Error",
        text: "Hubo un problema al crear el curso. Intenta nuevamente.",
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
          title: "",
          language: "",
          specialization: "",
          level: "",
          general_description: "",
          brief_description: "",
          img_url: null,
          video_url: null,
        }}
        validate={validateCoursesCreateModal}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="bg-whitePage space-y-4 p-6 border border-lightgray rounded shadow-lg w-[90vw] max-w-[400px] overflow-y-auto h-[90vh] max-h-[max-content] sm:text-[16px] sm:max-w-[460px]">
            <Subtitle label={`Crear Curso`} />

            <div>
              <label
                htmlFor="title"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Titulo:
              </label>
              <div className="flex flex-col gap-2">
                <Field
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Titulo del Curso"
                  className="inputUpdateUser"
                />
                <ErrorMessage
                  name="title"
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="language"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Lenguaje:
              </label>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <Field id="language" name="language" as="select" className="inputUpdateUser">
                    <option value="" disabled>
                      Seleccione un lenguaje
                    </option>
                    {allLanguages.map((language) => (
                      <option key={language.id} value={language.name}>
                        {language.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="language"
                    component="p"
                    className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="specialization"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Especialización:
              </label>
              <div className="flex flex-col gap-2">
                <Field
                  id="specialization"
                  name="specialization"
                  as="select"
                  className="inputUpdateUser"
                >
                  <option value="" disabled>
                    Seleccione una especialización
                  </option>
                  <option value="viajes" label="Viajes" />
                  <option value="conversación" label="Conversación" />
                  <option value="trabajo" label="Trabajo" />
                  <option value="legal" label="Legal" />
                  <option value="it" label="IT" />
                </Field>
                <ErrorMessage
                  name="specialization"
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="level"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Nivel:
              </label>
              <div className="flex flex-col gap-2">
                <Field id="level" name="level" as="select" className="inputUpdateUser">
                  <option value="" disabled>
                    Seleccione un nivel
                  </option>
                  <option value={ILevel.ELEMENTARY} label={ILevel.ELEMENTARY} />
                  <option value={ILevel.PRE_INTERMEDIATE} label={ILevel.PRE_INTERMEDIATE} />
                  <option value={ILevel.INTERMEDIATE} label={ILevel.INTERMEDIATE} />
                  <option value={ILevel.UPPER_INTERMEDIATE} label={ILevel.UPPER_INTERMEDIATE} />
                  <option value={ILevel.ADVANCED} label={ILevel.ADVANCED} />
                  <option value={ILevel.PROFICIENCY} label={ILevel.PROFICIENCY} />
                </Field>

                <ErrorMessage
                  name="level"
                  component="p"
                  className="flex items-center gap-2 text-red text-sm bg-red-50 border-l-4 border-red p-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="img_url"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Imagen del curso:
              </label>
              <div className="flex flex-col gap-2">
                <input
                  id="img_url"
                  name="img_url"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setFieldValue, "img_url", setImagePreview)}
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
                htmlFor="video"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Video de la clase:
              </label>
              <div className="flex flex-col gap-2">
                <input
                  id="video_url"
                  name="video_url"
                  type="file"
                  accept="video/*"
                  onChange={(e) =>
                    handleImageChange(e, setFieldValue, "video_url", setVideoPreview)
                  }
                  className="text-[14px]"
                />
                {videoPreview && (
                  <div className="mt-2 w-full h-[200px] relative">
                    <video
                      src={videoPreview}
                      controls
                      className="rounded-md w-full h-full object-cover"
                    />
                  </div>
                )}
                <ErrorMessage
                  name="video_url"
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
                  placeholder="Descripción General del Curso"
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
                  placeholder="Descripción Breve del Curso"
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
