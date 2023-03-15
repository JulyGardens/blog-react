import { PostCommentProps } from "./index.props";
import {
  StyledPostCommentBody,
  StyledPostCommentContainer,
  StyledPostCommentCreds,
  StyledPostCommentCredsInput,
} from "./index.styles";

export const PostComment = ({ name, email, body }: PostCommentProps) => {
  return (
    <StyledPostCommentContainer>
      <StyledPostCommentCreds>
        <StyledPostCommentCredsInput>{name}</StyledPostCommentCredsInput>
        <StyledPostCommentCredsInput>{email}</StyledPostCommentCredsInput>
      </StyledPostCommentCreds>
      <StyledPostCommentBody>{body}</StyledPostCommentBody>
    </StyledPostCommentContainer>
  );
};
