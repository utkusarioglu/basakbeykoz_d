import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { fetchSingular } from "../wordpress/singularActions";
import { setFetching, setDisplaying } from "../app/appActions";
import stateMap from "../../store/@types-state";
import { WpSingularTypes, TimestampedSingular } from "../wordpress/@types-wp";
import OverlayScrollbars from "overlayscrollbars";
import BodyView from "../../components/body/Body.component";
import { Env } from "../../common/@types-common";
//@ts-ignore
import pauseable from "pauseable";

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

function Body(props: Props) {
  const { REACT_APP_HOME_SLUG } = process.env as Env;
  const paramSlug = useParams<{ slug: string }>().slug || REACT_APP_HOME_SLUG;
  const {
    refs,
    setFetching,
    setDisplaying,
    fetchSingular,
    isDisplayingSlug,
    isDisplayingActive,
    isDisplayingStatus,
    singular,
  } = props;

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
      (timestampedSingular.data.state === "success" &&
        timestampedSingular.loadTime < anHourAgo)
    ) {
      setFetching(true);
      if (process.env.NODE_ENV === "development") {
        setTimeout(() => {
          fetchSingular(isDisplayingSlug);
        }, 1000);
      } else {
        fetchSingular(isDisplayingSlug);
      }
    } else {
      if (timestampedSingular.data.state === "success") {
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
    return <Redirect to="/404" />;
  }

  return (
    <BodyView
      {...isDisplayingActive}
      onLoad={getSlugOnload(isDisplayingSlug, refs)}
    />
  );
}

function findBySlug(
  singular: stateMap["singular"],
  slug: string
): TimestampedSingular | undefined {
  return Object.values(singular)
    .map((archive: stateMap["singular"][WpSingularTypes]) => {
      return archive.items[slug];
    })
    .filter((singular: TimestampedSingular | undefined) => {
      return singular !== undefined;
    })[0];
}

function getSlugOnload(
  slug: string,
  refs: RootState["app"]["refs"]
): () => void {
  switch (slug) {
    case process.env.REACT_APP_HOME_SLUG as string:
      return () => {
        setTimeout(() => {
          const fields = document.querySelectorAll(".wp-block-latest-posts");
          // Scrollbar for latest posts
          attachLlistActions(fields[0] as HTMLElement);
          // Scrollbar for testimonials
          attachLlistActions(fields[1] as HTMLElement);
          // Attach listener to the CTA
          // !HACK this listener is attached every time the page is opened
          document.body
            .getElementsByClassName("wp-block-button")[0]
            ?.addEventListener("mousedown", () => {
              refs.body?.current
                ?.osInstance()
                ?.scroll(
                  document.getElementsByClassName(
                    "wp-block-group"
                  )[1] as HTMLElement,
                  1000,
                  "easeOutExpo"
                );
            });
        }, 2000);
      };

    default:
      return () => null;
  }
}

function attachLlistActions(elem: HTMLElement): void {
  const SCROLL_DURATION = 1500;
  const LINGER_DURATION = 3000;

  const scrollbarRef = OverlayScrollbars(elem, {
    scrollbars: {
      autoHide: "leave",
    },
  });
  const osContent = elem.querySelectorAll(".os-content")[0];
  const children = osContent.children;
  const childrenCount = children.length;
  let currentChild = 1;
  const animation = pauseable.setInterval(() => {
    scrollbarRef.scroll(
      {
        el: children[currentChild] as HTMLElement,
        margin: true,
      },
      SCROLL_DURATION,
      "easeInOutSine"
    );
    // !TODO there is error in this, off by one
    currentChild = (currentChild % childrenCount) + 1;
  }, LINGER_DURATION);

  const target = elem.querySelectorAll(".os-content")[0];

  target.addEventListener("mouseover", () => {
    scrollbarRef.scrollStop();
    animation.pause();
  });
  target.addEventListener("mouseleave", () => {
    animation.resume();
  });
}

export default connector(Body);
