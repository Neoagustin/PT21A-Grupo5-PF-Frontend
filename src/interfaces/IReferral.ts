import { IUser } from "./IUser";

export interface ICreateReferral {
  quantity: number;
  issuer: string;
  discount: number;
  expiration: number;
}

export interface IReferral {
  id: string;
  code: string;
  discount: number;
  issuedAt: string;
  expirationDate: string;
  redeemedAt: string | null;
  redeemed: boolean;
  issuer: IUser;
}

export default IReferral;
