import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMenuOpen, selectIsMenuOpen } from "../../features/app/appActions";
import { Env } from "../../common/@types-common";
import "./_burgerMenu.view.scss";

interface Props {}

function BurgerMenu(props: Props) {
  const dispatch = useDispatch();
  const { REACT_APP_UPLOADS_DIR } = process.env as Env;

  const isMenuOpen = useSelector(selectIsMenuOpen);

  return (
    <div {...{ className: "BurgerMenu" }}>
      <button
        {...{
          onClick: () => dispatch(setIsMenuOpen(!isMenuOpen)),
          className: "BurgerMenu-burgerButton",
        }}
      >
        <img
          {...{ alt: "Menu", src: REACT_APP_UPLOADS_DIR + "/burger-menu.svg" }}
        />
      </button>
    </div>
  );
}

export default BurgerMenu;
