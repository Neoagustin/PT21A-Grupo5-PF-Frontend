import { fetchUserById } from "@/services/fetchUserById";
import bcrypt from "bcryptjs";
import { IChangePassword, IError } from "./types";

export const validateChangePassword = async (input: IChangePassword, id: string) => {
  const errors: IError = {};

  const user = await fetchUserById(id);

  const isPasswordValid = await bcrypt.compare(input.oldPassword, user.password);

  if (!isPasswordValid) errors.oldPassword = "La contraseña ingresada no coincide con la actual.";

  const isNewPasswordSameAsOld = await bcrypt.compare(input.newPassword, user.password);

  if (isNewPasswordSameAsOld)
    errors.newPassword = "La nueva contraseña no puede ser igual a la actual.";

  if (input.newPassword !== input.repeatPassword)
    errors.repeatPassword = "Las contraseñas no coinciden.";

  return errors;
};
