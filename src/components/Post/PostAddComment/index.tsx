import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { PostAddCommentProps } from "./index.props";
import {
  StyledPostAddCommentButtonSection,
  StyledPostAddCommentChangeSection,
  StyledPostAddCommentChangeSectionContainer,
  StyledPostAddCommentChangeSectionTitle,
  StyledPostAddCommentContainer,
  StyledPostAddCommentTitle,
  StyledPostAddCommentTitleContainer,
} from "./index.styles";
import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { createPostCommentAsync } from "../../../features/root/rootThunk";

export const PostAddComment = ({
  postId,
  modalState,
  toggleModal,
}: PostAddCommentProps) => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = () => {
    if (!email.length || !name.length || !body.length) return;

    dispatch(createPostCommentAsync({ postId, name, email, body }));

    toggleModal(!modalState);
  };

  return (
    <StyledPostAddCommentContainer>
      <StyledPostAddCommentTitleContainer>
        <StyledPostAddCommentTitle>
          Add new comment to post #{postId}
        </StyledPostAddCommentTitle>
      </StyledPostAddCommentTitleContainer>
      <StyledPostAddCommentChangeSection>
        <StyledPostAddCommentChangeSectionContainer>
          <StyledPostAddCommentChangeSectionTitle>
            Enter your email
          </StyledPostAddCommentChangeSectionTitle>
          <Input onInputAdded={setEmail} />
        </StyledPostAddCommentChangeSectionContainer>
        <StyledPostAddCommentChangeSectionContainer>
          <StyledPostAddCommentChangeSectionTitle>
            Enter your name
          </StyledPostAddCommentChangeSectionTitle>
          <Input onInputAdded={setName} />
        </StyledPostAddCommentChangeSectionContainer>
        <StyledPostAddCommentChangeSectionContainer>
          <StyledPostAddCommentChangeSectionTitle>
            Enter your comment
          </StyledPostAddCommentChangeSectionTitle>
          <Input onInputAdded={setBody} />
        </StyledPostAddCommentChangeSectionContainer>
      </StyledPostAddCommentChangeSection>
      <StyledPostAddCommentButtonSection>
        <Button onButtonClick={onSubmit}>Submit comment</Button>
      </StyledPostAddCommentButtonSection>
    </StyledPostAddCommentContainer>
  );
};
