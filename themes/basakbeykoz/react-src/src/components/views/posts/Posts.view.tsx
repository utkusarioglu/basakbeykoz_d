import React from 'react';
import { TimestampedSingular } from '../../features/wordpress/@types-wordpress';
import PostsItemView from './PostsItem.view';
import './_posts.view.scss';

interface OwnProps {
  PostsItems: TimestampedSingular[];
  locale: string;
  itemOnClick: () => void;
}

type Props = OwnProps;

function PostsView({ PostsItems, locale, itemOnClick }: Props) {
  const posts = PostsItems.map((single) => {
    if (single.data.state === 'success') {
      return (
        <li {...{ key: single.data.slug }}>
          <PostsItemView
            {...{
              ...single.data,
              locale,
              onClick: itemOnClick,
            }}
          />
        </li>
      );
    } else {
      return [];
    }
  });

  return (
    <div {...{ className: 'Posts' }}>
      <ol>{posts}</ol>
    </div>
  );
}

export default PostsView;
