import { createSlice } from "@reduxjs/toolkit";
import { normalizeThunkError } from "../../common/helpers/normalize-thunk-error";
import { initialRootState } from "./rootState";
import {
  createPostCommentAsync,
  getPostsAsync,
  getSinglePost,
} from "./rootThunk";

export const rootSlice = createSlice({
  name: "root",
  initialState: initialRootState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentPost: (state) => {
      state.currentPost = null;
    },
  },
  extraReducers: (builder) => {
    // GET POSTS ASYNC
    builder.addCase(getPostsAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPostsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(getPostsAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = normalizeThunkError(action.error.message);
    });
    // GET SINGLE POST
    builder.addCase(getSinglePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSinglePost.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPost = action.payload;
    });
    builder.addCase(getSinglePost.rejected, (state, action) => {
      state.loading = false;
      state.error = normalizeThunkError(action.error.message);
    });
    // CREATE POST COMMENT
    builder.addCase(createPostCommentAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPostCommentAsync.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createPostCommentAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = normalizeThunkError(action.error.message);
    });
  },
});

export const { clearError, clearCurrentPost } = rootSlice.actions;

export default rootSlice.reducer;
