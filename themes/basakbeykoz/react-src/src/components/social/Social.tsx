import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/rootReducer";
import SocialItem from "./SocialItem";
import "./_social.scss";

const mapState = (state: RootState) => ({
  socialItems: state.social.items,
});
const mapDispatch = {};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function Social(props: Props) {
  const { socialItems } = props;
  const socialComponents = socialItems.map((item) => {
    return <SocialItem key={item.title} item={item} />;
  });

  return (
    <div className="Social">
      <div className="Social-list">{socialComponents}</div>
      <div className="Social-decor" />
    </div>
  );
}

export default connector(Social);
