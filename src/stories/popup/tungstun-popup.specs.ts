import { MouseEventHandler } from "react";

export type Props = {
  isOpen: boolean;
  setClose: MouseEventHandler<HTMLDivElement>;
  children: JSX.Element[]
}