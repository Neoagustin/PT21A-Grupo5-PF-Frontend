import { FormikErrors } from "formik";

export const validateLessonsCreateModal = (values: {
  title: string;
  content: string;
  course: string | null;
}): FormikErrors<typeof values> => {
  const errors: FormikErrors<typeof values> = {};

  if (!values.title) {
    errors.title = "El título es requerido.";
  }

  if (!values.content) {
    errors.content = "El contenido es requerido.";
  }

  if (!values.course) {
    errors.course = "El curso es requerido.";
  }

  return errors;
};
