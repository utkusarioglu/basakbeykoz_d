import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { fetchPage } from "../wp/pageActions";
import CSS from 'csstype';

import Nav from "./Nav";

interface ReduxProps {
    fetchPage: typeof fetchPage,
}

interface wpMenuItem {
    ID: number,
    title: string,
    slug: string,
    url: string,
}

const styles: { [className: string]: CSS.Properties} = {
    header: {
        backgroundColor: "white",
        position: "fixed",
        top: 0,
        height: "130px",
        width: "1200px",
        left: "50%",
        transform: "translate(-50%)",
        display: "grid",
        justifyItems: "center",
        borderBottomLeftRadius: "35px",
        borderBottomRightRadius: "35px",
        boxShadow: "0 5px 50px RGBA(0,0,0,0.5)",
    },
    headerLogo: {
        height: "90px"
    }
}

// !HACK any used as type for props
function Header(props: ReduxProps & any): React.FunctionComponentElement<ReduxProps> {

    const logoClick = (e: SyntheticEvent) => {
        e.preventDefault();
        props.fetchPage(process.env.REACT_APP_HOME_ID)
    }

    return (
        <header style={styles.header}>
            <a 
                href="/"
                onClick={logoClick}
                >
                <img 
                    style={styles.headerLogo}
                    src={ process.env.REACT_APP_UPLOADS_DIR + "/Logo-150.jpg"}
                    alt="logo"/>
            </a>
            <Nav />
        </header>
    )
}

// !HACK any used as type
const mapStateToProps = (state: any) => ({
    menu: state.menu.items
});

export default connect(mapStateToProps, { 
    fetchPage,
})(Header);
