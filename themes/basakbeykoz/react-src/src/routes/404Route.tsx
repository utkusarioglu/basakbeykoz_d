import React from "react";
import BodyView from "../components/body/Body.component";

function FourOFourRoute() {
  return (
    <BodyView
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
