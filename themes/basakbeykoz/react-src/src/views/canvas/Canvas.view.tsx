import React, { useEffect } from 'react';
import PostsFeature from '../../features/blog/Posts.feature';
import { GeneralSingularItemforView } from '../../features/wordpress/@types-wordpress';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import './_canvas.view.scss';

type Props = GeneralSingularItemforView & {
  onLoad: () => void | undefined;
  articleComponent?: JSX.Element;
  thumbnailComponent?: JSX.Element;
  extraClasses?: string[];
};

function Canvas({
  onLoad,
  type,
  slug,
  title,
  thumbnail,
  content,
  articleComponent,
  thumbnailComponent,
  extraClasses,
}: Props) {
  const {
    REACT_APP_NAME,
    REACT_APP_SEPARATOR,
    REACT_APP_HOME_SLUG,
  } = process.env;

  const navSuffix =
    slug === REACT_APP_HOME_SLUG || slug === ''
      ? ''
      : REACT_APP_SEPARATOR + title;
  const siteTitle = REACT_APP_NAME + navSuffix;

  const bodyExtraClasses: string[] = [type, slug];
  if (extraClasses) bodyExtraClasses.push(...extraClasses);

  let featureImage;
  if (thumbnailComponent) {
    bodyExtraClasses.push('has-FeatureImage');
    featureImage = (
      <div {...{ className: 'FeatureImage-on' }}>{thumbnailComponent}</div>
    );
  } else {
    if (thumbnail !== '') {
      bodyExtraClasses.push('has-FeatureImage');
      featureImage = (
        <div
          {...{
            className: 'FeatureImage-on',
            dangerouslySetInnerHTML: { __html: thumbnail },
          }}
        />
      );
    } else {
      featureImage = <div {...{ className: 'FeatureImage-off' }} />;
    }
  }

  let featureTitle;
  let articleTitle;
  if (title !== '') {
    bodyExtraClasses.push('has-CanvasTitle');
    featureTitle = (
      <h2 {...{ className: 'Canvas-featureTitle text-blue' }}>{title}</h2>
    );
    articleTitle = (
      <h2 {...{ className: 'Canvas-articleTitle text-blue' }}>{title}</h2>
    );
  }

  let posts;
  let excludeSlugs = [];
  if (type === 'post') {
    excludeSlugs.push(slug);
    bodyExtraClasses.push('has-PostExcerptList');
    posts = (
      <div {...{ className: 'Posts-wrapper' }}>
        <h4>Similar Reads</h4>
        <PostsFeature {...{ excludeSlugs }} />
      </div>
    );
  }

  let article;
  if (articleComponent) {
    article = <article>{articleComponent}</article>;
  } else {
    article = <article {...{ dangerouslySetInnerHTML: { __html: content } }} />;
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
      <div {...{ className: 'Canvas ' + bodyExtraClasses.join(' ') }}>
        <div {...{ className: 'Canvas-decor' }}>
          {featureImage}
          {featureTitle}
        </div>
        {articleTitle}
        {article}
        {posts}
      </div>
    </>
  );
}

export default Canvas;
