import ICourse from "./ICourse";
import { IMembership } from "./IMembership";
import { ISuscription } from "./ISubscription";

export interface IUserLocalStorage {

    id: string,
    idNumber: string,
    name: string,
    email: string,
    photo: string,
    role: string,
    membership: IMembership,
    suscription: ISuscription,
    courses: ICourse[]
    
  } 
  