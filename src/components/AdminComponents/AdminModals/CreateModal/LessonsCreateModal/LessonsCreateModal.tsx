import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ICreateModalProps } from "../types";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import Swal from "sweetalert2";
import { ICreateLesson } from "@/interfaces/ILesson";
import { useLessonsAdminContext } from "@/context/Admin/LessonsAdminContext/LessonsAdminContext";
import { useAdminContext } from "@/context/AdminContext/AdminContext";
import { validateLessonsCreateModal } from "./validateLessonsCreateModal";

const LessonsCreateModal: React.FC<ICreateModalProps> = ({ closeCreateModal }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("id");
  const { title } = useAdminContext();
  const { createLesson } = useLessonsAdminContext();

  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const handleOnSubmit = async (values: ICreateLesson) => {
    console.log(values);

    try {
      createLesson(values);
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
      console.log(error);

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

  const handleVideoChange = (
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

  if (!courseId) throw new Error("El curso no existe");

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <Formik
        initialValues={{
          title: "",
          content: "",
          course: courseId,
          video: null,
        }}
        validate={validateLessonsCreateModal}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="bg-whitePage space-y-4 p-6 border border-lightgray rounded shadow-lg w-[90vw] max-w-[400px] overflow-y-auto h-[90vh] max-h-[max-content] sm:text-[16px] sm:max-w-[460px]">
            <Subtitle label={`Crear ${title}`} />

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
                  placeholder="Titulo de la clase"
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
                htmlFor="content"
                className="pl-1 block mb-1 text-[14px] text-darkgray sm:text-[16px]"
              >
                Descripción:
              </label>
              <div className="flex flex-col gap-2">
                <Field
                  as="textarea"
                  id="content"
                  name="content"
                  placeholder="Descripción de la clase"
                  rows={6}
                  className="inputUpdateUser resize-x-none p-2 min-h-[200px] sm:min-h-[300px]"
                />
                <ErrorMessage
                  name="content"
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
                  id="video"
                  name="video"
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleVideoChange(e, setFieldValue, "video", setVideoPreview)}
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

export default LessonsCreateModal;
