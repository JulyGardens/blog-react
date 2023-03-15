import {
  StyledPostEditChangeContainer,
  StyledPostEditChangeContainerText,
  StyledPostEditChangeSection,
  StyledPostEditConfirmSection,
  StyledPostEditContainer,
  StyledPostEditTitle,
} from "./index.styles";
import { useState } from "react";
import { PostEditProps } from "./index.props";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { useAppDispatch } from "../../../app/hooks";
import { updatePostAsync } from "../../../features/root/rootThunk";

export const PostEdit = ({
  postId,
  postBody,
  postTitle,
  size,
  toggleModal,
  modalState,
  ...props
}: PostEditProps) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState(postTitle);
  const [body, setBody] = useState(postBody);

  const onConfirmUpdate = () => {
    dispatch(
      updatePostAsync({
        id: postId,
        post: { title, body },
        fromSinglePage: size === "large" ? true : false,
      })
    );
    toggleModal(!modalState);
  };

  return (
    <StyledPostEditContainer>
      <StyledPostEditTitle>Edit post #{postId}</StyledPostEditTitle>
      <StyledPostEditChangeSection>
        <StyledPostEditChangeContainer>
          <StyledPostEditChangeContainerText>
            Edit title part
          </StyledPostEditChangeContainerText>
          <Input initialInput={title} onInputAdded={setTitle} />
        </StyledPostEditChangeContainer>
        <StyledPostEditChangeContainer>
          <StyledPostEditChangeContainerText>
            Edit body part
          </StyledPostEditChangeContainerText>
          <Input initialInput={body} onInputAdded={setBody} />
        </StyledPostEditChangeContainer>
      </StyledPostEditChangeSection>
      <StyledPostEditConfirmSection>
        <Button onButtonClick={onConfirmUpdate}>Update</Button>
      </StyledPostEditConfirmSection>
    </StyledPostEditContainer>
  );
};
