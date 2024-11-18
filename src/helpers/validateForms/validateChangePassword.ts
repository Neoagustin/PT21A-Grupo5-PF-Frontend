import { fetchUsers } from "@/services/fetchUsers";
import { IChangePassword, IError } from "./types";

export const validateChangePassword = async (input: IChangePassword) => {

    const errors: IError = {};

    const users = await fetchUsers();

    for await (const user of users) {

        console.log(user)

        if (user.password !== input.password) errors.password = 'La contraseña no coincide con la actual.';

    };

    if (input.password === input.newPassword) errors.newPassword = 'La contraseña debe ser distinta a la actual.'

    return errors;

};