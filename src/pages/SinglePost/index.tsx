import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectPost } from "../../features/root/rootSelectors";
import { useEffect } from "react";
import { getSinglePost } from "../../features/root/rootThunk";
import { LoadingSpinner } from "../../components/ui/LoadingSpinner";
import { PostCard } from "../../components/Post/PostCard";
import { StyledSinglePostContainer } from "./index.styles";

export const SinglePostPage = () => {
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectPost);
    
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    dispatch(getSinglePost(+id));
  }, [id]);

  return !post ? (
    <LoadingSpinner />
  ) : (
    <StyledSinglePostContainer>
      <PostCard
        size="large"
        postId={post.id}
        title={post.title}
        body={post.body}
        comments={post.comments}
      />
    </StyledSinglePostContainer>
  );
};
