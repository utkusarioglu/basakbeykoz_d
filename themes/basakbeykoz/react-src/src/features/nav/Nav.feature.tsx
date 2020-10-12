import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { wpMenuItem } from "../wordpress/@types-wordpress";
import { RootState } from "../../store/rootReducer";
import { fetchMenu } from "../wordpress/menuActions";
import { setIsMenuOpen } from "../app/appActions";
import "./_nav.scss";
import NavItemFeature from "./NavItem.feature";

const mapState = (state: RootState) => ({
  menu: state.menu,
});
const mapDispatch = {
  fetchMenu,
  setIsMenuOpen,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function NavFeature(props: Props) {
  const { menu, fetchMenu } = props;
  useEffect(() => {
    fetchMenu("nav");
  }, [fetchMenu]);

  const menuItems: JSX.Element[] = menu.items.map((item: wpMenuItem) => (
    <NavItemFeature key={item.ID} item={item} />
  ));

  return <nav>{menuItems}</nav>;
}

export default connector(NavFeature);
