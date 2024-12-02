import { IError, IMessageChatBot } from "./types";

export const validateChatBot = (input: IMessageChatBot) => {

    const errors: IError = {};

    if (input.message === '') errors.message = 'No puedes dejar el campo vacío.';

    return errors;

};