import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { boundFetchCategoryPosts } from "../wordpress/singularActions";
import { boundSetFetching } from "../app/appActions";
import PostsView from "../../views/posts/Posts.view";
import { Env } from "../../common/@types-common";

const mapState = (state: RootState) => ({
  posts: state.singular.post,
});
const mapDispatch = {
  fetchCategoryPosts: boundFetchCategoryPosts,
  setFetching: boundSetFetching,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {
  //slugs to exclude, helps to exclude the current post when the Posts is displayed in a post
  excludeSlugs: string[];
}

type Props = OwnProps & PropsFromRedux;

function PostsFeature(props: Props) {
  const { REACT_APP_BLOG_SLUG } = process.env as Env;
  const {
    fetchCategoryPosts,
    setFetching,
    excludeSlugs: excludeSlug,
    posts,
  } = props;

  // !HACK this is faulty logic
  setTimeout(() => {
    if (posts.fetchTime < Date.now() - 5000) {
      fetchCategoryPosts(REACT_APP_BLOG_SLUG);
      setFetching(false);
    } else {
      setFetching(false);
    }
  }, 1000);

  const filteredPosts = Object.values(posts.items).filter(
    (single) => single.data.slug !== excludeSlug[0] || false
  );

  return <PostsView PostsItems={filteredPosts} locale="TR-TR" />;
}

export default connector(PostsFeature);
