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
}

export const DefaultSession: Session = {
  id: "",
  name: "..."
}

export const DefaultBill: Bill = {
  id: "",
  isPayed: false,
  totalPrice: 0,
  session: DefaultSession
}
