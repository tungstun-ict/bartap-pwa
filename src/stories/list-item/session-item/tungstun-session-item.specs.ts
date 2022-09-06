export type Props = {
  session: Session;
}

export type Session = {
  id: string;
  name: string;
  creationDate: Date;
  closedDate: Date;
  isLocked: boolean;
  bills: Bill[]
}

export type Bill = {
  id: string;
  isPayed: boolean;
  totalPrice: number;
}