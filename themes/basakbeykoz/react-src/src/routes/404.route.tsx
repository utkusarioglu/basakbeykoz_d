import React from "react";
import Canvas from "../views/canvas/Canvas.view";

function FourOFourRoute() {
  return (
    <Canvas
      {...{
        type: "native",
        slug: "404",
        title: "404",
        thumbnail: "",
        content: "f",
        articleComponent: <p>hello</p>,
        onLoad: () => {},
      }}
    />
  );
}

export default FourOFourRoute;
