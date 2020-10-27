import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { fetchCategoryPosts } from '../wordpress/singularActions';
import { setFetching } from '../app/appActions';
import config from '../../config';
import PostsView from '../../views/posts/Posts.view';

const { BLOG_SLUG } = config;
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
  //slugs to exclude, helps to exclude the current post when the Posts is displayed in a post
  excludeSlugs: string[];
}

type Props = OwnProps & PropsFromRedux;

function PostsFeature({
  fetchCategoryPosts,
  setFetching,
  excludeSlugs,
  posts,
}: Props) {
  const fetchIfNeeded = () => {
    if (posts.fetchTime < Date.now() - 5000) {
      fetchCategoryPosts(BLOG_SLUG);
      setFetching(false);
    } else {
      setFetching(false);
    }
  };

  // !HACK this is faulty logic
  if (process.env.NODE_ENV === 'development') {
    setTimeout(fetchIfNeeded, 1000);
  } else {
    fetchIfNeeded();
  }

  const filteredPosts = Object.values(posts.items).filter(
    (single) => single.data.slug !== excludeSlugs[0] || false
  );

  return <PostsView {...{ PostsItems: filteredPosts, locale: 'TR-TR' }} />;
}

export default connector(PostsFeature);
