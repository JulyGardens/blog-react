import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ModalWindowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  state: boolean;
  toggle: (opt: boolean) => void;
}
