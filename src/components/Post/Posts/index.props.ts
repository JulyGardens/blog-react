import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Post } from "../../../common/types/post/post.types";

export interface PostsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  posts: Post[];
}
