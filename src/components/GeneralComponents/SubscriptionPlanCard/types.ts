export type SubscriptionName = "Standard" | "Premium" | "Pro";

export interface ISubscriptionPlanCardProps {
  subName: SubscriptionName;
  isRecommended?: boolean;
  className?: string;
}

export interface ISubscription {
  id: string;
  name: string;
  description: string[];
  price: string;
}

export default ISubscriptionPlanCardProps;
