export type Props = {
  barId: string;
  bill: Bill;
};

export type Session = {
  id: string;
  name: string;
  date: Date;
};

export type Bill = {
  id: string;
  isPayed: boolean;
  totalPrice: number;
  customer?: Customer;
  session: Session;
};

export type Customer = {
  id: string;
  name: string;
  userId: string;
};
