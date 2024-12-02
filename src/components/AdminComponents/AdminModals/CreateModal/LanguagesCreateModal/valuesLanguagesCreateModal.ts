import { FormikErrors } from "formik";

export const validateLanguagesCreateModal = (values: {
  path: string;
  name: string;
  general_description: string;
  brief_description: string;
}): FormikErrors<typeof values> => {
  const errors: FormikErrors<typeof values> = {};

  if (!values.name.trim()) {
    errors.name = "El nombre es requerido.";
  }

  if (!values.path.trim()) {
    errors.path = "La ruta es requerida.";
  }

  if (!values.general_description.trim()) {
    errors.general_description = "La descripción general es requerida.";
  }

  if (!values.brief_description.trim()) {
    errors.brief_description = "La descripción breve es requerida.";
  }

  return errors;
};
