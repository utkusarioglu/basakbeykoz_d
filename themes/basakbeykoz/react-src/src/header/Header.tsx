import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { isDisplaying } from '../app/appActions'
import CSS from 'csstype';

// import Nav from "./Nav";
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
    header: {
        position: "fixed",
        top: "var(--accent-thickness)",
        left: "50%",
        transform: "translateX(-50%)",
        margin: "auto",
        backgroundColor: "var(--white)",
        height: "110px",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
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
        // <div style={styles.headerContainer}>
            <header style={styles.header}>
                <a 
                    href="/"
                    onClick={logoClick}
                        style={styles.headerLogo}
                    >
                    <img 
                        src={ process.env.REACT_APP_UPLOADS_DIR + "/logo-inline.png"}
                        alt="logo"/>
                </a>
                {/* <Nav /> */}
        </header>
        // </div>

    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(Header);
