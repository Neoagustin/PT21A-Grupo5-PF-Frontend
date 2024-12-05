import { FormikErrors } from "formik";

export const validateLanguagesCreateModal = (
  values: {
    path: string;
    name: string;
    general_description: string;
    brief_description: string;
    image_url: File | null;
    flag_url: File | null;
    country_photo: File | null;
  },
  imagePreview: string | null,
  flagPreview: string | null,
  countryPhotoPreview: string | null
): FormikErrors<typeof values> => {
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

  if (!values.image_url && !imagePreview) {
    errors.image_url = "La imagen es requerida.";
  }

  if (!values.flag_url && !flagPreview) {
    errors.flag_url = "La bandera es requerida.";
  }

  if (!values.country_photo && !countryPhotoPreview) {
    errors.country_photo = "La foto del país es requerida.";
  }

  return errors;
};
