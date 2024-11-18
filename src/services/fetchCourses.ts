import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCourses = async () => {

    try {

        const response = await axios.get(`${API_URL}/courses`);

        return response.data;
        
    } catch (err: any) {
      
        throw new Error(err.message);

    };

};