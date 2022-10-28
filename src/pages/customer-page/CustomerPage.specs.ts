export type Customer = {
  id: string,
  userId: string,
  name: string,
}

export const DefaultCustomer: Customer = {
  id: "",
  userId: "",
  name: "... ..."
}

export type Account = {
  id: string,
  firstName: string,
  lastName: string,
  username: string,
}

export const DefaultAccount: Account = {
  id: "",
  firstName: "...",
  lastName: "...",
  username: "..."
}

export type Bar = {
  id: string,
  name: string,
}

export const DefaultBar = {
  id: "",
  name: "...",
}

export type Bill = {
  id: string,
  isPayed: boolean,
  totalPrice: number,
  session: Session,
}

export type Session = {
  id: string,
  name: string
  date: Date;
}

export const DefaultSession: Session = {
  id: "",
  name: "...",
  date: new Date()
}

export const DefaultBill: Bill = {
  id: "",
  isPayed: false,
  totalPrice: 0,
  session: DefaultSession
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