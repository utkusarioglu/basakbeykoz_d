import React, { useEffect } from "react";
import Posts from "../../features/blog/Posts";
import { GeneralSingularItemforView } from "../../features/wordpress/@types-wp";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import { Env } from "../../common/@types-common";
import "./_canvas.component.scss";

type Props = GeneralSingularItemforView & {
  onLoad: () => void | undefined;
  articleComponent?: JSX.Element;
  thumbnailComponent?: JSX.Element;
};

function Canvas(props: Props) {
  const {
    REACT_APP_NAME,
    REACT_APP_SEPARATOR,
    REACT_APP_HOME_SLUG,
  } = process.env as Env;
  const {
    onLoad,
    type,
    slug,
    title,
    thumbnail,
    content,
    articleComponent,
    thumbnailComponent,
  } = props;

  const navSuffix =
    slug === REACT_APP_HOME_SLUG || slug === ""
      ? ""
      : REACT_APP_SEPARATOR + title;
  const siteTitle = REACT_APP_NAME + navSuffix;

  const bodyExtraClasses: string[] = [type, slug];

  let featureImage;
  if (thumbnailComponent) {
    bodyExtraClasses.push("has-FeatureImage");
    featureImage = <div className="FeatureImage-on">{thumbnailComponent}</div>;
  } else {
    if (thumbnail !== "") {
      bodyExtraClasses.push("has-FeatureImage");
      featureImage = (
        <div
          className="FeatureImage-on"
          dangerouslySetInnerHTML={{ __html: thumbnail }}
        />
      );
    } else {
      featureImage = <div className="FeatureImage-off" />;
    }
  }

  let featureTitle;
  let articleTitle;
  if (title !== "") {
    bodyExtraClasses.push("has-CanvasTitle");
    featureTitle = <h2 className="Canvas-featureTitle text-blue">{title}</h2>;
    articleTitle = <h2 className="Canvas-articleTitle text-blue">{title}</h2>;
  }

  let postList;
  let excludeSlug = [];
  if (type === "post") {
    excludeSlug.push(slug);
    bodyExtraClasses.push("has-PostExcerptList");
    postList = (
      <div className="PostList-wrapper">
        <h4>Similar Reads</h4>
        <Posts excludeSlug={excludeSlug} />
      </div>
    );
  }

  let article;
  if (articleComponent) {
    article = <article>{articleComponent}</article>;
  } else {
    article = <article dangerouslySetInnerHTML={{ __html: content }} />;
  }

  ReactGA.pageview(window.location.pathname + window.location.search);
  useEffect(() => {
    onLoad();
  }, [onLoad, slug]);

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <div className={"Canvas " + bodyExtraClasses.join(" ")}>
        <div className="Canvas-decor">
          {featureImage}
          {featureTitle}
        </div>
        {articleTitle}
        {article}
        {postList}
      </div>
    </>
  );
}

export default Canvas;
