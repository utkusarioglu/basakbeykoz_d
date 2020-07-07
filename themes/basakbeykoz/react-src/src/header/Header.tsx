import React  from "react";
import "./_header.scss";

import Logo from "./Logo";
import Nav from "./Nav";
import Social from "./Social";

function Header() {
    return (
        <header className="Header">
            <div className="Header-bottomWrap">
                <Logo />
                <Social />
                <Nav />

            </div>
        </header>
    )
}

export default Header;