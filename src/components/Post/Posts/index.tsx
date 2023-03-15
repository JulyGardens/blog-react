import { ModalWindow } from "../../ui/Modal";
import { PostCard } from "../PostCard";
import { PostsProps } from "./index.props";
import { PostsContainer } from "./index.styles";
import { useState } from "react";
import { PostCreate } from "../PostCreate";
import { Button } from "../../ui/Button";

export const Posts = ({ posts, ...props }: PostsProps) => {
  const [modalState, setModalState] = useState(false);

  const onPostCreate = () => setModalState(!modalState);

  return (
    <PostsContainer>
      <Button onButtonClick={onPostCreate}>Create post</Button>
      {posts.map(({ id, title, body }) => (
        <PostCard size="small" key={id} postId={id} title={title} body={body} />
      ))}
      <ModalWindow state={modalState} toggle={setModalState}>
        <PostCreate modalState={modalState} toggleModal={setModalState} />
      </ModalWindow>
    </PostsContainer>
  );
};
