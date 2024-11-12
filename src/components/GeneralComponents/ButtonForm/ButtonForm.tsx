import React from "react";
import { IButtonFormProps } from "./types";

export const ButtonForm: React.FC<IButtonFormProps> = ({ name }: IButtonFormProps): React.ReactElement => {

    return <button type='submit' className="w-[319px] h-[40px] bg-violet text-whitePage font-poppins font-bold transition-all hover:bg-violetHover sm:w-[459px]">{name}</button>

};

export default ButtonForm;