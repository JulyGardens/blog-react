import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PostCardPropsSize } from "../PostCard/index.props";

export interface PostEditProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  postId: number;
  postTitle: string;
  postBody: string;
  toggleModal: (opt: boolean) => void;
  modalState: boolean;
  size: PostCardPropsSize;
}
