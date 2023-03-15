import { Button } from "../../ui/Button";
import { ModalWindow } from "../../ui/Modal";
import { PostComment } from "../PostComment";
import { PostCommentsSectionProps } from "./index.props";
import {
  StyledPostCommentsAddCommentContainer,
  StyledPostCommentsSection,
} from "./index.styles";
import { useState } from "react";
import { PostAddComment } from "../PostAddComment";

export const PostCommentsSection = ({
  comments,
  postId,
}: PostCommentsSectionProps) => {
  const [modalState, setModalState] = useState(false);

  const onAddNewComment = () => setModalState(!modalState);

  return (
    <StyledPostCommentsSection>
      {comments.map((comment) => (
        <PostComment key={comment.id} {...comment} />
      ))}
      <StyledPostCommentsAddCommentContainer>
        <Button onButtonClick={onAddNewComment}>Add new comment</Button>
      </StyledPostCommentsAddCommentContainer>
      <ModalWindow state={modalState} toggle={setModalState}>
        <PostAddComment
          postId={postId}
          modalState={modalState}
          toggleModal={setModalState}
        />
      </ModalWindow>
    </StyledPostCommentsSection>
  );
};
