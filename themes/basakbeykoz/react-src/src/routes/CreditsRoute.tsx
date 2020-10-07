import React from "react";
import { Env } from "../common/@types-common";
import Canvas from "../components/canvas/Canvas.component";
import Credits from "../components/credits/Credits.component";

function CreditsRoute() {
  const { REACT_APP_UPLOADS_DIR } = process.env as Env;
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
      width="2560"
      height="1671"
      src={`${featureImageName}scaled.jpg`}
      alt="Feature"
      srcSet={srcSet}
      sizes="(max-width: 2560px) 100vw, 2560px"
    />
  );

  return (
    <Canvas
      {...{
        type: "native",
        slug: "404",
        title: "Credits",
        thumbnail: "",
        thumbnailComponent,
        content: "",
        articleComponent: <Credits />,
        onLoad: () => {},
      }}
    />
  );
}

export default CreditsRoute;
