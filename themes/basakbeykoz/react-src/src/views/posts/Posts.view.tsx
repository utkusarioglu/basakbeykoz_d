import React from "react";
import { TimestampedSingular } from "../../features/wordpress/@types-wordpress";
import PostsItemView from "./PostsItem.view";
import "./_posts.view.scss";

interface OwnProps {
  PostsItems: TimestampedSingular[];
  locale: string;
}

type Props = OwnProps;

function PostsView(props: Props) {
  const { PostsItems, locale } = props;

  const posts = PostsItems.map((single) => {
    if (single.data.state === "success") {
      return (
        <li {...{ key: single.data.slug }}>
          <PostsItemView {...{ ...single.data, locale }} />
        </li>
      );
    } else {
      return [];
    }
  });

  return (
    <div {...{ className: "Posts" }}>
      <ol>{posts}</ol>
    </div>
  );
}

export default PostsView;
