export type Bar = {
  id: string;
  name: string;
  debt: number;
}

export const DefaultBar = {
  id: "0",
  name: "...",
  address: "...",
  email: "...",
  phoneNumber: "...",
}

export type Bill = {
  id: string;
  name: string;
  totalPrice: number;
  isPayed: boolean;
  session: Session;
}

export type Session = {
  id: string;
  name: string;
  date: Date;
}