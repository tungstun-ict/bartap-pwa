export type Account = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  username: string;
  connectedBars: Bar[];
}

export const DefaultAccount: Account = {
  id: "",
  email: "...@...com",
  firstName: "...",
  lastName: "...",
  phoneNumber: "...",
  username: "...",
  connectedBars: []
}

export type Bar = {
  
}