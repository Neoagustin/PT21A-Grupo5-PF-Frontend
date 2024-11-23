import ICourse from "./ICourse";
import { IMembership } from "./IMembership";

export interface IUser {
  id: string;
  name: string;
  email: string;
  idNumber: string;
  password: string;
  photo: string;
  role: string;
  membership: IMembership;
  courses: ICourse[];
}
