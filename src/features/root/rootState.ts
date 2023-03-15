import { Post, PostWithComments } from "../../common/types/post/post.types";

export interface RootState {
  currentPost: PostWithComments | null;
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export const initialRootState: RootState = {
  currentPost: null,
  posts: [],
  loading: false,
  error: null,
};
