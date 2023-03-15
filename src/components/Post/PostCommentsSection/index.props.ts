import { PostComment } from "../../../common/types/comment/post-comment.types";

export interface PostCommentsSectionProps {
  postId: number;
  comments: PostComment[];
}
