import React from "react";
import { Link } from "react-router-dom";
import "./_postsCard.component.scss";

interface Props {
  title: string;
  content: string;
  excerpt: string;
  date: string;
  slug: string;
  thumbnail: string;
  locale: string;
}

function PostListCardView(props: Props) {
  const { title, content, excerpt, date, slug, thumbnail, locale } = props;

  const fixedExcerpt = !!excerpt ? excerpt : createExcerpt(content);
  const dateObj = new Date(date.replace(/-/g, "/"));
  const fixedDate = dateObj.toLocaleDateString(locale);

  return (
    <Link to={"/" + slug} className="PostList-card">
      <div
        className="PostList-card-thumbnail"
        dangerouslySetInnerHTML={{ __html: thumbnail }}
      />
      <h4 className="PostList-card-title">{title}</h4>
      <span className="PostList-card-date">{fixedDate}</span>
      <div
        className="PostList-card-excerpt"
        dangerouslySetInnerHTML={{ __html: fixedExcerpt }}
      ></div>
    </Link>
  );
}

function createExcerpt(content: Props["content"]): Props["excerpt"] {
  return content.split("</p>")[0] + "</p>";
}

export default PostListCardView;
