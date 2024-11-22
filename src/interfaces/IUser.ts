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
