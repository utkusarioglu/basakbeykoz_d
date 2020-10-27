import React, { useEffect } from 'react';
import PostsFeature from '../../features/blog/Posts.feature';
import { GeneralSingularItemforView } from '../../features/wordpress/@types-wordpress';
import config from '../../config';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import '../../styles/components/canvas/_canvas.view.scss';

const { APP_NAME, APP_SEPARATOR, HOME_SLUG, APP_TAGLINE } = config;

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
  const pageTitle = APP_SEPARATOR + title;
  const tagline = APP_SEPARATOR + APP_TAGLINE;
  const navSuffix = slug === HOME_SLUG || slug === '' ? tagline : pageTitle;
  const siteTitle = APP_NAME + navSuffix;

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
      <h1 {...{ className: 'Canvas-featureTitle text-blue' }}>{title}</h1>
    );
    articleTitle = (
      <h1 {...{ className: 'Canvas-articleTitle text-blue' }}>{title}</h1>
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
