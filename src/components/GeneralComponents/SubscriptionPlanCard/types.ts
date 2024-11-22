export type SubscriptionName = "Standard" | "Premium" | "Pro";

export interface ISubscriptionPlanCardProps {
  subName: SubscriptionName;
  isRecommended?: boolean;
  isCurrent?: boolean;
  className?: string;
  button?: boolean;
}

export interface ISubscription {
  id: string;
  name: string;
  description: string[];
  price: string;
}

export default ISubscriptionPlanCardProps;
