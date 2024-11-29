import { FormikErrors } from "formik";

export const validateCoursesCreateModal = (values: {
  title: string;
  language: string;
  specialization: string;
  level: string;
  general_description: string;
  brief_description: string;
}): FormikErrors<{
  title: string;
  language: string;
  specialization: string;
  level: string;
  general_description: string;
  brief_description: string;
}> => {
  const errors: FormikErrors<typeof values> = {};

  if (!values.title) {
    errors.title = "El título es requerido.";
  }

  if (!values.language) {
    errors.language = "El lenguaje es requerido.";
  }

  if (!values.specialization) {
    errors.specialization = "La especialización es requerida.";
  }

  if (!values.level) {
    errors.level = "El nivel es requerido.";
  }

  if (!values.general_description) {
    errors.general_description = "La descripción general es requerida.";
  }

  if (!values.brief_description) {
    errors.brief_description = "La descripción breve es requerida.";
  }

  return errors;
};
