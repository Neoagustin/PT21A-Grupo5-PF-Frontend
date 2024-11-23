import ICourse from "./ICourse";

interface IMembership {
  id: string;
  subscription: {
    id: string;
    name: string;
    description: string[];
    price: string;
  };
  payments: string[];
}
export interface IUpdateUser {
  name?: string;
  email?: string;
  idNumber?: string;
  password?: string;
  role?: string;
  photo?: string;
  newsletter?: boolean;
  isActive?: boolean;
}

export interface IEditUserFormValues {
  name?: string;
  email?: string;
  idNumber?: string;
  subscriptionName?: string;
  role?: string;
  state?: string;
}

export interface IUser {
  id: string;
  authId: string | null;
  name: string;
  email: string;
  idNumber: string;
  password: string;
  photo: string;
  role: string;
  isActive: boolean;
  newsletter: boolean;
  createdAt: string;
  courses: ICourse[];
  membership: IMembership;
}
