import { ISubscription } from "@/components/GeneralComponents/SubscriptionPlanCard/types";
import ICourse from "./ICourse";

export interface IUser {
    id: string;
    name: string;
    email: string;
    idNumber: string;
    password: string;
    photo: string;
    role: string;
    subscription: ISubscription;
    courses: ICourse[]
};