import axios from "axios";
import { SERVER_URL } from "../../enviroment";
import { CreatePostCommentOptionsAPI } from "../../common/types/comment/post-comment-api.types";
import { BaseApi } from "../base/base-http.service";

class CommentHttpService extends BaseApi {
  public createComment(body: CreatePostCommentOptionsAPI) {
    return this.post("comments", { body });
  }
}

export const commentHttpService = new CommentHttpService(axios, {
  baseURL: SERVER_URL,
});
