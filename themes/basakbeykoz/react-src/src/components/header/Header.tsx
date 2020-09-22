import React  from "react";
import "./_header.scss";

import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import Social from "../social/Social";
import NavHeaderView from '../nav/NavHeaderView';


function Header() {
    return (
        <header className="Header">
            <div className="Header-bottomWrap">
                <Logo />
                <NavHeaderView />
                <Social />
                <BurgerMenu />
            </div>
        </header>
    )
}

export default Header;