import axios from "axios";
import { SERVER_URL } from "../../enviroment";
import {
  CreatePostOptionsAPI,
  UpdatePostDataAPI,
} from "../../common/types/post/post-api.types";
import { Post, PostWithComments } from "../../common/types/post/post.types";
import { BaseApi } from "../base/base-http.service";

class PostHttpService extends BaseApi {
  public getPosts() {
    return this.get<Post[]>("posts");
  }

  public getPost(id: number) {
    return this.get<PostWithComments>(`posts/${id}?_embed=comments`);
  }

  public createPost(body: CreatePostOptionsAPI) {
    return this.post("posts", { body });
  }

  public updatePost(id: number, body: UpdatePostDataAPI) {
    return this.put(`posts/${id}`, { body });
  }

  public deletePost(id: number) {
    return this.delete(`posts/${id}`);
  }
}

export const postHttpService = new PostHttpService(axios, {
  baseURL: SERVER_URL,
});
