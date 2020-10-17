import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { fetchSingular, selectSingular } from "../wordpress/singularActions";
import {
  setFetching,
  setDisplaying,
  selectIsDisplayingSlug,
  selectIsDisplayingActive,
  selectIsDisplayingStatus,
  selectRefs,
} from "../app/appActions";
import stateMap from "../../store/@types-state";
import {
  WpSingularTypes,
  TimestampedSingular,
} from "../wordpress/@types-wordpress";
import OverlayScrollbars from "overlayscrollbars";
import Canvas from "../../views/canvas/Canvas.view";
import { Env } from "../../common/@types-common";
//@ts-ignore
import pauseable from "pauseable";

interface Props {}
interface Params {
  slug: string;
}

function SluggedFeature(props: Props) {
  const dispatch = useDispatch();
  const { REACT_APP_HOME_SLUG } = process.env as Env;
  const paramSlug = useParams<Params>().slug || REACT_APP_HOME_SLUG;
  const singular = useSelector(selectSingular);
  const isDisplayingSlug = useSelector(selectIsDisplayingSlug);
  const isDisplayingActive = useSelector(selectIsDisplayingActive);
  const isDisplayingStatus = useSelector(selectIsDisplayingStatus);
  const refs = useSelector(selectRefs);

  if (paramSlug !== isDisplayingSlug) {
    dispatch(
      setDisplaying({
        slug: paramSlug,
      })
    );
  }
  const timestampedSingular = findBySlug(singular, isDisplayingSlug);

  useEffect(() => {
    const anHourAgo = Date.now() - 1000 * 60;
    if (
      timestampedSingular === undefined ||
      (timestampedSingular.data.state === "success" &&
        timestampedSingular.loadTime < anHourAgo)
    ) {
      dispatch(setFetching(true));
      if (process.env.NODE_ENV === "development") {
        setTimeout(() => {
          fetchSingular(isDisplayingSlug).then(dispatch);
        }, 1000);
      } else {
        fetchSingular(isDisplayingSlug).then(dispatch);
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
        dispatch(
          setDisplaying({
            status: 200,
            active: {
              slug,
              title,
              type,
              content,
              thumbnail,
            },
          })
        );
      } else {
        dispatch(
          setDisplaying({
            status: 404,
            slug: timestampedSingular.data.slug,
          })
        );
      }
      dispatch(setFetching(false));
    }
  }, [
    dispatch,
    timestampedSingular,
    isDisplayingSlug,
    // fetchSingular,
    // setFetching,
    // setDisplaying,
  ]);

  if (isDisplayingStatus === 404) {
    setFetching(false);
    return <Redirect {...{ to: "/404" }} />;
  }

  return (
    <Canvas
      {...{
        ...isDisplayingActive,
        onLoad: getSlugOnload(isDisplayingSlug, refs),
      }}
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
          attachListActions(fields[0] as HTMLElement);
          // Scrollbar for testimonials
          attachListActions(fields[1] as HTMLElement);
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

function attachListActions(elem: HTMLElement): void {
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

export default SluggedFeature;
