import { FormikErrors } from "formik";

export const validateLessonsCreateModal = (values: {
  title: string;
  content: string;
  course: string;
}): FormikErrors<typeof values> => {
  const errors: FormikErrors<typeof values> = {};

  if (!values.title.trim()) {
    errors.title = "El título es requerido.";
  }

  if (!values.content.trim()) {
    errors.content = "El contenido es requerido.";
  }

  if (!values.course) {
    errors.course = "El curso es requerido.";
  }

  return errors;
};
