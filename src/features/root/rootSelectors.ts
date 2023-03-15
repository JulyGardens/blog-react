import { RootState } from "../../app/store";

export const selectLoading = (state: RootState) => state.root.loading;
export const selectPost = (state: RootState) => state.root.currentPost;
export const selectPosts = (state: RootState) => state.root.posts;
