import { IUser } from "@/interfaces/IUser";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchUsers = async (): Promise<IUser[]> => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const fetchUsersPage = async (page: number, limit: number, role: string) => {
  try {
    const response = await axios.get(`${API_URL}/users/page`, {
      params: { page, limit, role },
    });
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const fetchUserById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const createUser = async (userData: IUser) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const updateUser = async (id: string, userData: IUser) => {
  try {
    const response = await axios.patch(`${API_URL}/users/${id}`, userData);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const replaceUser = async (id: string, userData: IUser) => {
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, userData);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
