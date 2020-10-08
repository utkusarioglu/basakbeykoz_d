import React from "react";
import "./_header.component.scss";

import HeaderLogo from "./HeaderLogo.component";
import BurgerMenu from "./BurgerMenu.component";
import Social from "../social/Social.component";
import NavHeaderView from "../nav/NavHeader.component";

function Header() {
  return (
    <header className="Header">
      <div className="Header-bottomWrap">
        <HeaderLogo />
        <NavHeaderView />
        <Social />
        <BurgerMenu />
      </div>
    </header>
  );
}

export default Header;
