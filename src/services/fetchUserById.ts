import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchUserById = async (id: string) => {

    try {

        const response = await axios.get(`${API_URL}/users/${id}`);

        return response.data;

    } catch (err: any) {

        throw new Error(err.message);

    };

};