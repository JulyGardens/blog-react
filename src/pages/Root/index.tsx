import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Posts } from "../../components/Post/Posts";
import { LoadingSpinner } from "../../components/ui/LoadingSpinner";
import { selectLoading, selectPosts } from "../../features/root/rootSelectors";
import { getPostsAsync } from "../../features/root/rootThunk";

export const RootPage = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector(selectPosts);
  const isLoading = useAppSelector(selectLoading);

  useEffect(() => {
    if (posts.length) return;

    dispatch(getPostsAsync());
  }, [dispatch, posts]);

  return isLoading ? <LoadingSpinner /> : <Posts posts={posts} />;
};
