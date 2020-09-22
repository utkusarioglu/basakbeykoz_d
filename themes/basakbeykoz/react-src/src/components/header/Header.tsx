import React  from "react";
import "./_header.scss";

import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import Social from "../social/Social";

function Header() {
    return (
        <header className="Header">
            <div className="Header-bottomWrap">
                <Logo />
                <Social />
                <BurgerMenu />
            </div>
        </header>
    )
}

export default Header;