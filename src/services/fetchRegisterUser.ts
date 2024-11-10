import { IUserRegister } from "@/helpers/validateForms/types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchRegisterUser = async (userData: IUserRegister) => {

    try {

        const response = await fetch(`${API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        console.log(data);
        
    } catch (error) {
      
        console.log(error);

    };

};