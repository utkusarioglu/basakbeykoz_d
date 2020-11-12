import React, { useEffect } from 'react';
import PostsFeature from '../../features/blog/Posts.feature';
import { GeneralSingularItemforView } from '../../features/wordpress/@types-wordpress';
import config from '../../../config';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import ShareView from '../../views/share/Share.view';
import './_canvas.layout.scss';

const { APP_NAME, APP_SEPARATOR, HOME_SLUG, APP_TAGLINE } = config;

type Props = GeneralSingularItemforView & {
  onLoad: () => void | undefined;
  articleComponent?: JSX.Element;
  thumbnailComponent?: JSX.Element;
  extraClasses?: string[];
};

function CanvasLayout({
  onLoad,
  type,
  slug,
  title,
  thumbnail,
  content,
  excerpt,
  articleComponent,
  thumbnailComponent,
  extraClasses,
  shareDisabled,
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
    const cleanedTitle = cleanTitle(title);
    featureTitle = (
      <h1 {...{ className: 'Canvas-featureTitle text-blue' }}>
        {cleanedTitle}
      </h1>
    );
    articleTitle = (
      <h1 {...{ className: 'Canvas-articleTitle text-blue' }}>
        {cleanedTitle}
      </h1>
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
          {!shareDisabled && <ShareView {...{ title, excerpt }} />}
        </div>
        {articleTitle}
        {article}
        {posts}
      </div>
    </>
  );
}

/**
 * The client uses certain punctuation marks to distinguish the name, job title
 * and company of the testimonials, which are stored as the title property
 * of their respective posts.
 *
 * These titles were way too lengthy to be pleasantly displayed in the title
 * section, so it made sense to only render the names of the testimonials.
 * This function substrings the title from start to the very first punctuation
 * being scanned. This is done with the assumption that the client puts the
 * name before everything else.
 *
 * A similar manipulation is made for the cards that display the testimonials
 * on the homepage. See home.injection.ts -> substituteTestimonialChars()
 *
 * @param title - title of the post/page
 * @returns cleaned title that only contains the name
 */
function cleanTitle(title: string) {
  // common punctuation used
  const finds = ['-', '–', '/'];
  const findsIndexes: number[] = finds
    .map((find) => title.indexOf(find))
    // excluding the finds that aren't in the title
    .filter((find) => find !== -1);
  // Note that if none of the finds exist in the title, math.min return will
  // be infinity. But this is okay as line with the substring simply
  // ends up getting the entire line when infinity is the second input.
  //! Be careful that Math.min(...[]) is infinity while Math.min([]) is 0.
  const cleanedTitle = title.substring(0, Math.min(...findsIndexes)).trim();
  return cleanedTitle;
}

export default CanvasLayout;
