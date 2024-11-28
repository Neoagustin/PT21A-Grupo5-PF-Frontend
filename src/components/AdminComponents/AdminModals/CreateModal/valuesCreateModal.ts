import { ICreateCourse } from "@/interfaces/ICourse";

export const validateCreateModal = (values: ICreateCourse) => {
  const errors: Partial<ICreateCourse> = {};

  if (!values.title.trim()) {
    errors.title = "El título es requerido.";
  }

  if (!values.language.trim()) {
    errors.language = "El lenguaje es requerido.";
  }

  if (!values.specialization.trim()) {
    errors.specialization = "La especialización es requerida.";
  }

  if (!values.level.trim()) {
    errors.level = "El nivel es requerido.";
  }

  if (!values.general_description.trim()) {
    errors.general_description = "La descripción general es requerida.";
  }

  if (!values.brief_description.trim()) {
    errors.brief_description = "La descripción breve es requerida.";
  }

  return errors;
};
