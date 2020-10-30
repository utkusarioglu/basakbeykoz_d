import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { fetchSingular } from '../wordpress/singularActions';
import { setFetching, setDisplaying } from '../app/appActions';
import config from '../../../config';
import {
  WpSingularTypes,
  TimestampedSingular,
} from '../wordpress/@types-wordpress';
import OverlayScrollbars from 'overlayscrollbars';
import CanvasLayout from '../../layout/canvas/Canvas.layout';
//@ts-ignore
import pauseable from 'pauseable';

const { HOME_SLUG } = config;
const mapState = (state: RootState) => ({
  singular: state.singular,
  isDisplayingStatus: state.app.isDisplaying.status,
  isDisplayingSlug: state.app.isDisplaying.slug,
  isDisplayingActive: state.app.isDisplaying.active,
  isFetching: state.app.isFetching,
  refs: state.app.refs,
});
const mapDispatch = {
  fetchSingular,
  setFetching,
  setDisplaying,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;
interface Params {
  slug: string;
}

function SluggedFeature({
  refs,
  setFetching,
  setDisplaying,
  fetchSingular,
  isDisplayingSlug,
  isDisplayingActive,
  isDisplayingStatus,
  singular,
}: Props) {
  const paramSlug = useParams<Params>().slug || HOME_SLUG;

  if (paramSlug !== isDisplayingSlug) {
    setDisplaying({
      slug: paramSlug,
    });
  }
  const timestampedSingular = findBySlug(singular, isDisplayingSlug);

  useEffect(() => {
    const anHourAgo = Date.now() - 1000 * 60;
    if (
      timestampedSingular === undefined ||
      (timestampedSingular.data.state === 'success' &&
        timestampedSingular.loadTime < anHourAgo)
    ) {
      setFetching(true);
      if (config.NODE_ENV === 'development') {
        setTimeout(() => {
          fetchSingular(isDisplayingSlug);
        }, 1000);
      } else {
        fetchSingular(isDisplayingSlug);
      }
    } else {
      if (timestampedSingular.data.state === 'success') {
        const {
          slug,
          title,
          type,
          content,
          thumbnail,
        } = timestampedSingular.data;
        setDisplaying({
          status: 200,
          active: {
            slug,
            title,
            type,
            content,
            thumbnail,
          },
        });
      } else {
        setDisplaying({
          status: 404,
          slug: timestampedSingular.data.slug,
        });
      }
      setFetching(false);
    }
  }, [
    timestampedSingular,
    isDisplayingSlug,
    fetchSingular,
    setFetching,
    setDisplaying,
  ]);

  if (isDisplayingStatus === 404) {
    setFetching(false);
    return <Redirect {...{ to: '/404' }} />;
  }

  return (
    <CanvasLayout
      {...{
        ...isDisplayingActive,
        onLoad: getSlugOnload(isDisplayingSlug, refs),
      }}
    />
  );
}

function findBySlug(
  singular: RootState['singular'],
  slug: string
): TimestampedSingular | undefined {
  return Object.values(singular)
    .map((archive: RootState['singular'][WpSingularTypes]) => {
      return archive.items[slug];
    })
    .filter((singular: TimestampedSingular | undefined) => {
      return singular !== undefined;
    })[0];
}

function getSlugOnload(
  slug: string,
  refs: RootState['app']['refs']
): () => void {
  switch (slug) {
    case config.HOME_SLUG as string:
      return () => {
        setTimeout(() => {
          const fields = document.querySelectorAll('.wp-block-latest-posts');
          // Scrollbar for latest posts
          attachListActions(fields[0] as HTMLElement);
          // Scrollbar for testimonials
          attachListActions(fields[1] as HTMLElement);
          // Attach listener to the CTA
          // !HACK this listener is attached every time the page is opened
          document.body
            .getElementsByClassName('wp-block-button')[0]
            ?.addEventListener('mousedown', () => {
              refs.body?.ref.current
                ?.osInstance()
                ?.scroll(
                  document.getElementsByClassName(
                    'wp-block-group'
                  )[1] as HTMLElement,
                  1000,
                  'easeOutExpo'
                );
            });
        }, 2000);
      };

    default:
      return () => null;
  }
}

function attachListActions(elem: HTMLElement): void {
  const SCROLL_DURATION = 1500;
  const LINGER_DURATION = 3000;
  const ANIMATION_ENABLED = true;

  const scrollbarRef = OverlayScrollbars(elem, {
    scrollbars: {
      autoHide: 'leave',
    },
  });
  const osContent = elem.querySelectorAll('.os-content')[0];
  const children = osContent.children;
  const childrenCount = children.length;
  let currentChild = 1;
  if (ANIMATION_ENABLED) {
    const animation = pauseable.setInterval(() => {
      scrollbarRef.scroll(
        {
          el: children[currentChild] as HTMLElement,
          margin: true,
        },
        SCROLL_DURATION,
        'easeInOutSine'
      );
      // !TODO there is error in this, off by one
      currentChild = (currentChild % childrenCount) + 1;
    }, LINGER_DURATION);

    const target = elem.querySelectorAll('.os-content')[0];

    target.addEventListener('mouseover', () => {
      scrollbarRef.scrollStop();
      animation.pause();
    });
    target.addEventListener('mouseleave', () => {
      animation.resume();
    });
  }
}

export default connector(SluggedFeature);
