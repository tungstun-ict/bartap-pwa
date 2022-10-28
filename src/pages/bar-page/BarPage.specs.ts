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

export const DefaultBill: Bill = {
  id: '',
  name: '... ...',
  totalPrice: 0,
  isPayed: false,
  session: { id: '', name: '...', date: new Date() },
}

export type Statistics = {
  mostSoldProduct: Product,
  mostExpensiveBill: Bill,
  totalSpent: number,
  totalNotYetPayed: number,
}

export type Product = {
  id: string,
  name: string,
  brand: string,
  price: number,
}

export const DefaultProduct: Product = {
  id: '',
  name: '...',
  brand: '...',
  price: 0,
}

export const DefaultStatistics: Statistics = {
  mostSoldProduct: DefaultProduct,
  mostExpensiveBill: DefaultBill,
  totalSpent: 0,
  totalNotYetPayed: 0, 
}