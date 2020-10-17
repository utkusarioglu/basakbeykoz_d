import React from "react";
import { useSelector } from "react-redux";
import { selectSocialItems } from "../../features/social/socialActions";
import SocialItem from "./SocialItem.component";
import "./_social.view.scss";

interface Props {}

function Social(props: Props) {
  const socialItems = useSelector(selectSocialItems);
  const socialComponents = socialItems.map((item) => {
    return (
      <SocialItem
        {...{
          key: item.title,
          ...item,
        }}
      />
    );
  });

  return (
    <div {...{ className: "Social" }}>
      <div {...{ className: "Social-list" }}>{socialComponents}</div>
      <div {...{ className: "Social-decor" }} />
    </div>
  );
}

export default Social;
