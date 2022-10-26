export type Bar = {
  id: string;
  address: string;
  name: string;
  mail: string;
  phoneNumber: string;
}

export type Bill = {
  id: string;
  name: string;
  totalPrice: number;
  isPayed: boolean;
  session: Session;
  bar: Bar;
}

export type Session = {
  id: string;
  name: string;
  date: Date;
}