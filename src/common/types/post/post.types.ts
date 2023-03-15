import { PostComment } from "../comment/post-comment.types";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostWithComments extends Post {
  comments: PostComment[];
}
