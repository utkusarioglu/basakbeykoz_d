import React from "react";
import NavFeature from "../../features/nav/Nav.feature";
import { useSelector, useDispatch } from "react-redux";
import { selectIsMenuOpen, setIsMenuOpen } from "../../features/app/appActions";
import "./_navFixed.view.scss";

interface Props {}

function NavFixedView(props: Props) {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const menuToggle = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  return (
    <div
      {...{
        onClick: menuToggle,
        className: "NavFixedView " + (isMenuOpen ? "open" : ""),
      }}
    >
      <div {...{ className: "NavFixedView-mask" }} />
      <div {...{ className: "NavFixedView-decor" }} />
      <div {...{ className: "NavFixedView-list" }}>
        <NavFeature />
      </div>
    </div>
  );
}

export default NavFixedView;
