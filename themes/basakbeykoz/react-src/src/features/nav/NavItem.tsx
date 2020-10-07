import React from "react";
import { wpMenuItem } from "../wordpress/@types-wp";
import { connect, ConnectedProps } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store/rootReducer";
import { setDisplaying } from "../app/appActions";
import "./_navItem.scss";
import { Env } from "../../common/@types-common";

const mapState = (state: RootState) => ({
  refs: state.app.refs,
});
const mapDispatch = {
  setDisplaying,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {
  item: wpMenuItem;
}
type Props = OwnProps & PropsFromRedux;

function NavItem(props: Props) {
  const { REACT_APP_HOME_SLUG } = process.env as Env;
  const { item, refs, setDisplaying } = props;
  const cleanSlug = !!item.slug ? item.slug : "";
  const clickSlug = cleanSlug || (REACT_APP_HOME_SLUG as string);

  const setDisplayingAction = (slug: string) => {
    setDisplaying({
      slug,
    });
    refs.body?.current?.osInstance()?.scroll(0, 500, "easeInOutSine");
  };

  return (
    <NavLink
      key={item.ID}
      exact
      to={"/" + cleanSlug}
      className="Nav-item"
      activeClassName="Nav-item-active"
      onClick={() => setDisplayingAction(clickSlug)}
    >
      {item.title}
    </NavLink>
  );
}

export default connector(NavItem);
