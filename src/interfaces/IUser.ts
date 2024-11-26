import ICourse from "./ICourse";
import { IMembership } from "./IMembership";
import { ISuscription } from "./ISubscription";

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
  name: string;
  email: string;
  idNumber: string;
  password: string;
  photo: string;
  role: string;
  isActive: boolean;
  newsletter: boolean;
  authId: string | null;
  createdAt: string;
  courses: ICourse[];
  membership: IMembership;
  subscription: ISuscription;
}
