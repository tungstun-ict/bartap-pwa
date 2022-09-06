import { MouseEventHandler } from "react";

export type Props = {
  account: Account;
  expanded: boolean;
  handleDisconnect: MouseEventHandler<HTMLDivElement>;
  handleConnect: MouseEventHandler<HTMLDivElement>;
};

export type Account = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
};
