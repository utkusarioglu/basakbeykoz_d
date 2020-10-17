import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryPosts, selectPosts } from "../wordpress/singularActions";
import { setFetching } from "../app/appActions";
import PostsView from "../../views/posts/Posts.view";
import { Env } from "../../common/@types-common";

interface Props {
  //slugs to exclude, helps to exclude the current post when the Posts is displayed in a post
  excludeSlugs: string[];
}

function PostsFeature(props: Props) {
  const dispatch = useDispatch();
  const { REACT_APP_BLOG_SLUG } = process.env as Env;
  const posts = useSelector(selectPosts);
  const { excludeSlugs } = props;

  // !HACK this is faulty logic
  setTimeout(() => {
    if (posts.fetchTime < Date.now() - 5000) {
      fetchCategoryPosts(REACT_APP_BLOG_SLUG).then((action) =>
        dispatch(action)
      );
      dispatch(setFetching(false));
    } else {
      dispatch(setFetching(false));
    }
  }, 1000);

  const filteredPosts = Object.values(posts.items).filter(
    (single) => single.data.slug !== excludeSlugs[0] || false
  );

  return <PostsView {...{ PostsItems: filteredPosts, locale: "TR-TR" }} />;
}

export default PostsFeature;
