export type Props = {
  barId: string;
  customer: Customer;
};

export type Customer = {
  id: string;
  accountId: string;
  name: string;
};
