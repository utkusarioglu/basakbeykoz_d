import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { ISocialItem } from "../../features/social/@types-social";
import { setIsMenuOpen } from "../../features/app/appActions";
import ReactGA from "react-ga";
import { RootState } from "../../store/rootReducer";
import "./_socialItem.component.scss";

const mapState = (state: RootState) => ({});
const mapDispatch = {
  setIsMenuOpen,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {
  item: ISocialItem;
}

type Props = OwnProps & PropsFromRedux;

function SocialItem(props: Props) {
  const { item, setIsMenuOpen } = props;

  return (
    <ReactGA.OutboundLink
      eventLabel={item.title}
      onClick={() => setIsMenuOpen(false)}
      to={item.link}
      target="_blank"
    >
      <img
        className="Social-icon"
        src={item.icon}
        title={item.title}
        alt={item.title}
      ></img>
    </ReactGA.OutboundLink>
  );
}

export default connector(SocialItem);
