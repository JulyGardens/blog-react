import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PostCardMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  state: boolean;
  toggle: (opt: boolean) => void;
  onUpdate: () => void;
  onDelete: () => void;
  onClose: () => void;
}
