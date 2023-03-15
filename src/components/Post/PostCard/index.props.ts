import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PostComment } from "../../../common/types/comment/post-comment.types";

export type PostCardPropsSize = "small" | "large";

export interface StyledProps {
  size: PostCardPropsSize;
}

export interface PostCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: PostCardPropsSize;
  postId: number;
  title: string;
  body: string;
  comments?: PostComment[];
}
