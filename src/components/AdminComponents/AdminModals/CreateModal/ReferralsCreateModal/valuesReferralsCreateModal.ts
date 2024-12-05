import { FormikErrors } from "formik";

export const validateReferralsCreateModal = (values: {
  quantity: number;
  issuer: string;
  discount: number;
  expiration: number;
}): FormikErrors<typeof values> => {
  const errors: FormikErrors<typeof values> = {};

  if (values.quantity <= 0) {
    errors.quantity = "La cantidad debe ser mayor a 0.";
  }

  if (values.discount < 0 || values.discount > 100) {
    errors.discount = "El descuento debe estar entre 0 y 100.";
  }

  if (values.expiration <= 0) {
    errors.expiration = "La expiración debe ser mayor a 0.";
  }

  return errors;
};
