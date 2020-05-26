import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { isDisplaying } from '../app/appActions'
import CSS from 'csstype';

import Nav from "./Nav";
import { RootState } from "../app/rootReducer";

const mapState = (state: RootState) => ({
    menu: state.menu.items
});

const mapDispatch = {
    isDisplaying,
}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

// TODO better static typing for style elements
const styles: { [className: string]: CSS.Properties} = {
    headerContainer: {
        position: "fixed",
        top: 0,
        width: "100vw",
    },
    header: {
        margin: "auto",
        backgroundColor: "white",
        height: "130px",
        maxWidth: "1200px",
        display: "grid",
        justifyItems: "center",
        borderBottomLeftRadius: "35px",
        borderBottomRightRadius: "35px",
        boxShadow: "var(--content-shadow)",
        zIndex: 10,
        // backgroundColor: "gray",
        // border: "10px solid transparent",
        // borderImage: "url(wp-content/themes/basakbeykoz/border-decoration.svg) 20 stretch"
    },
    headerLogo: {
        height: "90px"
    }
}

function Header(props: Props): React.FunctionComponentElement<Props> {

    const logoClick = (e: SyntheticEvent) => {
        e.preventDefault();
        const id = parseInt(process.env.REACT_APP_HOME_ID as string);
        props.isDisplaying({
            type: "page",
            id,
        })    
    }

    return (
        <div style={styles.headerContainer}>
            <header style={styles.header}>
                <a 
                    href="/"
                    onClick={logoClick}
                    >
                    <img 
                        style={styles.headerLogo}
                        src={ process.env.REACT_APP_UPLOADS_DIR + "/logo-inline.png"}
                        alt="logo"/>
                </a>
                <Nav />
        </header>
        </div>

    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(Header);
