import { IError, IUserRegister } from "./types";
import { regex } from "./utils";

export const validateRegister = (input: IUserRegister) => {

    const errors: IError = {};

    if (!input.name.trim().includes(' ')) errors.name = 'El nombre completo ingresado no es válido. Asegúrate de que contenga al menos 2 palabras (por ejemplo, "Juan Pérez").';

    if (!regex.email.test(input.email)) errors.email = 'La dirección de correo ingresada no es válida. Asegúrate de que contenga un nombre de usuario, el símbolo "@" y un dominio.';

    if (!regex.idNumber.test(input.idNumber)) errors.idNumber = 'El número de documento ingresado no es válido.';

    if (!regex.password.test(input.password)) errors.password = 'La contraseña ingresada no cumple con los requisitos. Debe tener al menos 8 caracteres, incluir una letra mayúscula, un número y un símbolo especial (por ejemplo, !@#$%).';

    if (input.password !== input.repeatPassword) errors.repeatPassword = 'Las contraseñas no coinciden.';

    return errors;

};