import { ISubscription } from "@/components/GeneralComponents/SubscriptionPlanCard/types";
import ICourse from "./ICourse";
import { IMembership } from "./IMembership";

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

export interface ICreateUser {
  name: string;
  email: string;
  idNumber: string;
}

export interface IEditUserFormValues {
  id?: string;
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
  subscription: ISubscription;
}
