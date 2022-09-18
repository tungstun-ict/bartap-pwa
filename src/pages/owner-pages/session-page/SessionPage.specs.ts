export type Customer = {
  id: string;
  name: string;
  userId: string;
}

const DefaultCustomer: Customer = {
  id: "",
  name: "... ...",
  userId: "",
}

export type Bill = {
  id: string;
  date: Date;
  name: string;
  totalPrice: number;
  payed: boolean;
  orders: Order[];
  customer: Customer;
};

export const DefaultBill: Bill = {
  id: "",
  date: new Date(Date.now()),
  name: "... ...",
  totalPrice: 0,
  payed: false,
  orders: [],
  customer: DefaultCustomer,
}



export type Session = {
  id: string;
  name: string;
  startDate: Date;
}

export const DefaultSession: Session = {
  id: "",
  name: "... ...",
  startDate: new Date(Date.now())
}

export type Product = {
  name: string;
  brand: string;
  price: number;
}

export const DefaultProduct: Product = {
  name: "...",
  brand: "...",
  price: 0,
}

export type Order = {
  product: Product,
  creationDate: Date,
  total: number,
  amount: number,
};

export const DefaultOrder: Order = {
  product: DefaultProduct,
  creationDate: new Date(Date.now()),
  total: 0,
  amount: 0,
}
