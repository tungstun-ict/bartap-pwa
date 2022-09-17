export type Bill = {
  id: string;
  date: Date;
  name: string;
  total: number;
  payed: boolean;
  orders: Order[]
};

export const DefaultBill: Bill = {
  id: "",
  date: new Date(Date.now()),
  name: "... ...",
  total: 0,
  payed: false,
  orders: []
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
  timestamp: Date,
  total: number,
  amount: number,
};

export const DefaultOrder: Order = {
  product: DefaultProduct,
  timestamp: new Date(Date.now()),
  total: 0,
  amount: 0,
}

