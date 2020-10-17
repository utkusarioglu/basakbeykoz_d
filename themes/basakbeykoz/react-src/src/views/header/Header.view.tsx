import React from "react";
import "./_header.view.scss";

import HeaderLogo from "./HeaderLogo.view";
import BurgerMenu from "./BurgerMenu.view";
import Social from "../social/Social.view";
import NavHeaderView from "../nav/NavHeader.view";

function Header() {
  return (
    <header {...{ className: "Header" }}>
      <div {...{ className: "Header-bottomWrap" }}>
        <HeaderLogo />
        <NavHeaderView />
        <Social />
        <BurgerMenu />
      </div>
    </header>
  );
}

export default Header;
