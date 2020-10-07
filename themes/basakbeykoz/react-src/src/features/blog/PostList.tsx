import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { fetchCategoryPosts } from "../wordpress/singularActions";
import { setFetching } from "../app/appActions";
import PostListView from "../../components/blog/PostListView";

const mapState = (state: RootState) => ({
  posts: state.singular.post,
});
const mapDispatch = {
  fetchCategoryPosts,
  setFetching,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {
  //slugs to exclude, helps to exclude the current post when the postList is displayed in a post
  excludeSlug: string[];
}

type Props = OwnProps & PropsFromRedux;

function PostList(props: Props) {
  const { REACT_APP_BLOG_SLUG } = process.env as { [key: string]: string };
  const { fetchCategoryPosts, setFetching, excludeSlug, posts } = props;

  // !HACK this is faulty logic
  setTimeout(() => {
    if (posts.fetchTime < Date.now() - 5000) {
      fetchCategoryPosts(REACT_APP_BLOG_SLUG);
      setFetching(false);
    }
  }, 1000);

  const postList = Object.values(posts.items).filter(
    (single) => single.data.slug !== excludeSlug[0] || false
  );

  return <PostListView postListItems={postList} locale="TR-TR" />;
}

export default connector(PostList);
