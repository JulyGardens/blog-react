import { createAsyncThunk } from "@reduxjs/toolkit";
import { commentHttpService } from "../../services/comment/comment-http.service";
import { postHttpService } from "../../services/post/post-http.service";
import { CreatePostCommentOptionsAPI } from "../../common/types/comment/post-comment-api.types";
import {
  CreatePostOptionsAPI,
  UpdatePostOptionsAPI,
} from "../../common/types/post/post-api.types";
import { clearCurrentPost } from "./rootSlice";

export const getPostsAsync = createAsyncThunk("root/getPosts", async () => {
  const response = await postHttpService.getPosts();

  return response.data;
});

export const getSinglePost = createAsyncThunk(
  "root/getSinglePost",
  async (id: number) => {
    const response = await postHttpService.getPost(id);

    return response.data;
  }
);

export const createPostAsync = createAsyncThunk(
  "root/createPost",
  async (options: CreatePostOptionsAPI, thunkApi) => {
    await postHttpService.createPost(options);

    thunkApi.dispatch(getPostsAsync());
  }
);

export const updatePostAsync = createAsyncThunk(
  "root/updatePost",
  async (options: UpdatePostOptionsAPI, thunkApi) => {
    await postHttpService.updatePost(options.id, options.post);

    if (!options.fromSinglePage) {
      thunkApi.dispatch(getPostsAsync());
    } else {
      thunkApi.dispatch(getSinglePost(options.id));
    }
  }
);

export const deletePostAsync = createAsyncThunk(
  "root/deletePost",
  async (id: number, thunkApi) => {
    await postHttpService.deletePost(id);

    thunkApi.dispatch(clearCurrentPost());
    thunkApi.dispatch(getPostsAsync());
  }
);

export const createPostCommentAsync = createAsyncThunk(
  "root/createPostComment",
  async (options: CreatePostCommentOptionsAPI, thunkApi) => {
    await commentHttpService.createComment(options);

    thunkApi.dispatch(getSinglePost(options.postId));
  }
);
