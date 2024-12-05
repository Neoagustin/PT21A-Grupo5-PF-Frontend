import IReferral, { ICreateReferral } from "@/interfaces/IReferral";

export interface IRefferalAdminContextProps {
  loading: boolean;
  error: string | null;
  referrals: IReferral[];
  createReferral: (referralData: ICreateReferral) => void;
}
