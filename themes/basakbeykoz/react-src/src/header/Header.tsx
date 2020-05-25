import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { fetchPage } from "../wp/pageActions";
import CSS from 'csstype';

import Nav from "./Nav";
import { RootState } from "../app/rootReducer";

const mapState = (state: RootState) => ({
    menu: state.menu.items
});

const mapDispatch = {
    fetchPage,
}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

// TODO better static typing for style elements
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

function Header(props: Props): React.FunctionComponentElement<Props> {

    const logoClick = (e: SyntheticEvent) => {
        e.preventDefault();
        const home_id = process.env.REACT_APP_HOME_ID as string;
        props.fetchPage(parseInt(home_id));
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

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(Header);
