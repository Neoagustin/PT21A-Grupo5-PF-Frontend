import { fetchUsers } from "@/services/fetchUsers";
import { IError, IUserUpdate } from "./types";
import { regex } from "./utils";

export const validateUpdateUser = async (
  input: IUserUpdate,
  currentEmail: string,
  currentIdNumber: string
) => {
  const errors: IError = {};

  const users = await fetchUsers();

  for await (const user of users) {
    if (
      currentEmail !== input.email.toLowerCase() &&
      user.email.toLowerCase() === input.email.toLowerCase()
    )
      errors.email = "La dirección de correo ya se encuentra registrada.";

    if (currentIdNumber !== input.idNumber && user.idNumber === input.idNumber)
      errors.idNumber = "El número de documento ya se encuentra registrado.";
  }

  if (!input.name.trim().includes(" "))
    errors.name =
      'El nombre completo ingresado no es válido. Asegúrate de que contenga al menos 2 palabras (por ejemplo, "Juan Pérez").';

  if (!regex.email.test(input.email))
    errors.email =
      'La dirección de correo ingresada no es válida. Asegúrate de que contenga un nombre de usuario, el símbolo "@" y un dominio.';

  if (!regex.idNumber.test(input.idNumber))
    errors.idNumber = "El número de documento ingresado no es válido.";

  return errors;
};
