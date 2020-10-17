import React from "react";
import { useDispatch } from "react-redux";
import { ISocialItem } from "../../features/social/@types-social";
import { setIsMenuOpen } from "../../features/app/appActions";
import ReactGA from "react-ga";
import "./_socialItem.view.scss";

type Props = ISocialItem;

function SocialItem(props: Props) {
  const dispatch = useDispatch();
  const { title, link, icon } = props;

  return (
    <ReactGA.OutboundLink
      {...{
        eventLabel: title,
        onClick: () => dispatch(setIsMenuOpen(false)),
        to: link,
        target: "_blank",
      }}
    >
      <img
        {...{
          className: "Social-item",
          src: icon,
          title,
          alt: title,
        }}
      />
    </ReactGA.OutboundLink>
  );
}

export default SocialItem;
export type SocialItemOwnProps = Props;
