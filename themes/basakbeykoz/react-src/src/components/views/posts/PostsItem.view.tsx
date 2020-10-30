import React from 'react';
import { Link } from 'react-router-dom';
import './_postsItem.view.scss';

interface Props {
  title: string;
  content: string;
  excerpt: string;
  date: string;
  slug: string;
  thumbnail: string;
  locale: string;
}

function PostsItemView({
  title,
  content,
  excerpt,
  date,
  slug,
  thumbnail,
  locale,
}: Props) {
  const fixedExcerpt = !!excerpt ? excerpt : createExcerpt(content);
  const dateObj = new Date(date.replace(/-/g, '/'));
  const fixedDate = dateObj.toLocaleDateString(locale);

  return (
    <Link
      {...{
        className: 'Posts-card',
        to: `/${slug}`,
      }}
    >
      <div
        {...{
          className: 'Posts-card-thumbnail',
          dangerouslySetInnerHTML: { __html: thumbnail },
        }}
      />
      <h3 {...{ className: 'Posts-card-title' }}>{title}</h3>
      <span {...{ className: 'Posts-card-date' }}>{fixedDate}</span>
      <div
        {...{
          className: 'Posts-card-excerpt',
          dangerouslySetInnerHTML: { __html: fixedExcerpt },
        }}
      ></div>
    </Link>
  );
}

function createExcerpt(content: Props['content']): Props['excerpt'] {
  return content.split('</p>')[0] + '</p>';
}

export default PostsItemView;
