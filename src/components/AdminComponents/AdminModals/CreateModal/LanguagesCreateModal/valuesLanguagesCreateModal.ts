import { FormikErrors } from "formik";

export const validateUserCreateModal = (values: {
  name: string;
  email: string;
  idNumber: string;
}): FormikErrors<typeof values> => {
  const errors: FormikErrors<typeof values> = {};

  if (!values.name.trim()) {
    errors.name = "El nombre es requerido.";
  }

  if (!values.email.trim()) {
    errors.email = "El correo electrónico es requerido.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El correo electrónico no es válido.";
  }

  if (!values.idNumber.trim()) {
    errors.idNumber = "El número de identificación es requerido.";
  }

  return errors;
};
