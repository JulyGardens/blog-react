import { PostCardProps } from "./index.props";
import {
  PostCardBodyContainer,
  PostCardBodyText,
  PostCardContainer,
  PostCardMenuContainer,
  PostCardTitleContainer,
  PostCardTitleText,
} from "./index.styles";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../../app/hooks";
import { deletePostAsync } from "../../../features/root/rootThunk";
import { useState } from "react";
import { ModalWindow } from "../../ui/Modal";
import { PostCardMenu } from "../PostCardMenu";
import { PostEdit } from "../PostEdit";
import { PostCommentsSection } from "../PostCommentsSection";

export const PostCard = ({
  postId,
  body,
  title,
  size,
  comments,
  ...props
}: PostCardProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [modalState, setModalState] = useState(false);
  const [menuState, setMenuState] = useState(false);

  const navigateToPost = () => navigate(`/post/${postId}`);

  const handleDeleteClick = () => {
    dispatch(deletePostAsync(postId));

    if (size === "large") navigate("/");
  };

  const handleUpdateClick = () => setModalState(!modalState);
  const handleCloseMenuClick = () => setMenuState(!menuState);

  return (
    <PostCardContainer size={size}>
      <PostCardTitleContainer size={size} onClick={navigateToPost}>
        <PostCardTitleText>
          {postId} {title}
        </PostCardTitleText>
        <PostCardMenuContainer onClick={(event) => event.stopPropagation()}>
          <PostCardMenu
            onClose={handleCloseMenuClick}
            onDelete={handleDeleteClick}
            onUpdate={handleUpdateClick}
            state={menuState}
            toggle={setMenuState}
          />
        </PostCardMenuContainer>
      </PostCardTitleContainer>
      <PostCardBodyContainer>
        <PostCardBodyText size={size}>{body}</PostCardBodyText>
        {size === "large" && comments?.length ? (
          <PostCommentsSection comments={comments} postId={postId} />
        ) : null}
      </PostCardBodyContainer>
      <ModalWindow state={modalState} toggle={setModalState}>
        <PostEdit
          toggleModal={setModalState}
          modalState={modalState}
          size={size}
          postId={postId}
          postTitle={title}
          postBody={body}
        />
      </ModalWindow>
    </PostCardContainer>
  );
};
