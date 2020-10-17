import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { wpMenuItem } from "../wordpress/@types-wordpress";
import { fetchMenu, selectMenu } from "../wordpress/menuActions";
import "./_nav.scss";
import NavItemFeature from "./NavItem.feature";

interface Props {}

function NavFeature(props: Props) {
  const dispatch = useDispatch();
  const menu = useSelector(selectMenu);
  useEffect(() => {
    fetchMenu("nav").then(dispatch);
  }, [dispatch]);

  const menuItems: JSX.Element[] = menu.items.map((item: wpMenuItem) => (
    <NavItemFeature {...{ key: item.ID, item }} />
  ));

  return <nav>{menuItems}</nav>;
}

export default NavFeature;
