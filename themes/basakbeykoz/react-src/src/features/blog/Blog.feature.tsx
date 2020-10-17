import React from "react";
import { useDispatch } from "react-redux";
import PostsFeature from "./Posts.feature";
import Canvas from "../../views/canvas/Canvas.view";
import { Env } from "../../common/@types-common";
import { setFetching } from "../app/appActions";
import "./_blog.scss";

type Props = {};

function BlogFeature(props: Props) {
  const dispatch = useDispatch();
  const { REACT_APP_UPLOADS_DIR, REACT_APP_BLOG_SLUG } = process.env as Env;
  // const { setFetching } = props;
  const featureImageName = "yazilar-feature-image";
  const featureImagePath = `${REACT_APP_UPLOADS_DIR}/${featureImageName}-`;
  const srcSet = [
    "scaled.jpg 2560w",
    "300x196.jpg 300w",
    "1024x669.jpg 1024w",
    "768x501.jpg 768w",
    "1536x1003.jpg 1536w",
    "2048x1337.jpg 2048w",
  ]
    .map((variation) => featureImagePath + variation)
    .join(",");

  const thumbnailComponent = (
    <img
      {...{
        width: "2560",
        height: "1671",
        src: `${featureImageName}scaled.jpg`,
        alt: "Feature",
        srcSet,
        sizes: "(max-width: 2560px) 100vw, 2560px",
      }}
    />
  );

  dispatch(setFetching(true));

  return (
    <Canvas
      {...{
        type: "native",
        slug: REACT_APP_BLOG_SLUG,
        title: "Paylaşımlar",
        extraClasses: ["blog"],
        thumbnail: "",
        thumbnailComponent,
        content: "",
        articleComponent: <PostsFeature {...{ excludeSlugs: [] }} />,
        onLoad: () => {},
      }}
    />
  );
}

export default BlogFeature;
