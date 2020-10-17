import React from "react";
import { wpMenuItem } from "../wordpress/@types-wordpress";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectRefs, setDisplaying } from "../app/appActions";
import "./_navItem.scss";
import { Env } from "../../common/@types-common";

type Props = {
  item: wpMenuItem;
};

function NavItemFeature(props: Props) {
  const dispatch = useDispatch();
  const { REACT_APP_HOME_SLUG } = process.env as Env;
  const { item } = props;
  const refs = useSelector(selectRefs);
  const cleanSlug = !!item.slug ? item.slug : "";
  const clickSlug = cleanSlug || (REACT_APP_HOME_SLUG as string);

  const setDisplayingAction = (slug: string) => {
    dispatch(
      setDisplaying({
        slug,
      })
    );
    refs.body?.current?.osInstance()?.scroll(0, 500, "easeInOutSine");
  };

  return (
    <NavLink
      {...{
        key: item.ID,
        exact: true,
        to: "/" + cleanSlug,
        className: "Nav-item",
        activeClassName: "Nav-item-active",
        onClick: () => setDisplayingAction(clickSlug),
      }}
    >
      {item.title}
    </NavLink>
  );
}

export default NavItemFeature;
