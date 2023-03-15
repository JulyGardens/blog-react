import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { createPostAsync } from "../../../features/root/rootThunk";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import {
  StyledPostAddCommentContainer,
  StyledPostAddCommentTitleContainer,
  StyledPostAddCommentTitle,
  StyledPostAddCommentChangeSection,
  StyledPostAddCommentChangeSectionContainer,
  StyledPostAddCommentChangeSectionTitle,
  StyledPostAddCommentButtonSection,
} from "../PostAddComment/index.styles";
import { PostCreateProps } from "./index.props";

export const PostCreate = ({ modalState, toggleModal }: PostCreateProps) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = () => {
    if (!body.length || !title.length) return;

    dispatch(createPostAsync({ body, title }));

    toggleModal(!modalState);
  };

  return (
    <StyledPostAddCommentContainer>
      <StyledPostAddCommentTitleContainer>
        <StyledPostAddCommentTitle>Create new post</StyledPostAddCommentTitle>
      </StyledPostAddCommentTitleContainer>
      <StyledPostAddCommentChangeSection>
        <StyledPostAddCommentChangeSectionContainer>
          <StyledPostAddCommentChangeSectionTitle>
            Enter post title
          </StyledPostAddCommentChangeSectionTitle>
          <Input onInputAdded={setTitle} />
        </StyledPostAddCommentChangeSectionContainer>
        <StyledPostAddCommentChangeSectionContainer>
          <StyledPostAddCommentChangeSectionTitle>
            Enter post body
          </StyledPostAddCommentChangeSectionTitle>
          <Input onInputAdded={setBody} />
        </StyledPostAddCommentChangeSectionContainer>
      </StyledPostAddCommentChangeSection>
      <StyledPostAddCommentButtonSection>
        <Button onButtonClick={onSubmit}>Submit post</Button>
      </StyledPostAddCommentButtonSection>
    </StyledPostAddCommentContainer>
  );
};
