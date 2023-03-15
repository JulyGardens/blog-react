import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  state: boolean;
  toggle: (opt: boolean) => void;
}
