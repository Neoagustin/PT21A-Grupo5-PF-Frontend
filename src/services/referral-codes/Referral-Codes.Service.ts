import { ICreateReferral } from "@/interfaces/IReferral";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCreateReferral = async (referralData: ICreateReferral) => {
  try {
    const response = await axios.post(`${API_URL}/referral-codes/create`, referralData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const fetchGetReferral = async () => {
  try {
    const response = await axios.get(`${API_URL}/referral-codes`);

    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
