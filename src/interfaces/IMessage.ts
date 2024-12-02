type TSender = "user" | "bot";

export interface IMessage {
  sender: TSender;
  content: string;
}
