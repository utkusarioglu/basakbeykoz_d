import React from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import Canvas from "../../views/canvas/Canvas.component";
import { Env } from "../../common/@types-common";
import { setFetching } from "../app/appActions";
import "./_blog.scss";
import { RootState } from "../../store/rootReducer";
import { ConnectedProps } from "react-redux";

const mapState = (state: RootState) => ({});
const mapDispatch = {
  setFetching,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function Blog(props: Props) {
  const { REACT_APP_UPLOADS_DIR, REACT_APP_BLOG_SLUG } = process.env as Env;
  const { setFetching } = props;
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

  setFetching(true);

  return (
    <Canvas
      {...{
        type: "native",
        slug: REACT_APP_BLOG_SLUG,
        title: "Paylaşımlar",
        thumbnail: "",
        thumbnailComponent,
        content: "",
        articleComponent: <Posts excludeSlug={[]} />,
        onLoad: () => {},
      }}
    />
  );
}

export default connector(Blog);
