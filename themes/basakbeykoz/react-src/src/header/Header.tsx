import React  from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setDisplaying } from '../app/appActions'
import CSS from 'csstype';

// import Nav from "./Nav";
import { RootState } from "../app/rootReducer";

const mapState = (state: RootState) => ({
    menu: state.menu.items
});

const mapDispatch = {
    setDisplaying: setDisplaying,
}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

// TODO better static typing for style elements
const styles: { [className: string]: CSS.Properties} = {
    logoDecor: {
        width: "var(--accent-thickness)",
        height: "100%",
        background: "var(--blue)",
        position: "absolute",
        left: 0,
    },
    logoWrap: {
        position: "fixed",
        top: "var(--accent-thickness)",
        left: 0,
        height: "110px",
        zIndex: 1,
        // display: "grid",
        // justifyItems: "center",
        // alignItems: "center",
    },
    logoLink: {
        height:"100%",
        paddingLeft: "var(--accent-thickness)",
        display: "grid",
        alignItems: "center",
        justifyItems: "end"
        // height: "11px"
    },
    logoImg: {
        filter: "var(--logo-white-filter)",
    }
}

function Header(props: Props): React.FunctionComponentElement<Props> {

    // const logoClick = (e: SyntheticEvent) => {
    //     e.preventDefault();
    //     const slug = process.env.REACT_APP_HOME_SLUG as string;
    //     props.setDisplaying({
    //         // type: "page",
    //         slug,
    //     })    
    // }
    const setDisplaying = () => {
        props.setDisplaying({
            slug: process.env.REACT_APP_HOME_SLUG as string
        })        
    }

    return (
        <header style={styles.logoWrap}>
            <div style={styles.logoDecor} />
            <Link
                onClick={setDisplaying}
                to="/">
                <div 
                    className="logo"
                    style={styles.logoLink}
                    >
                    <img 
                        src={ process.env.REACT_APP_UPLOADS_DIR + "/logo-inline.png"}
                        alt="logo"
                        style={styles.logoImg}/>
                </div>
            </Link>
        </header>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(Header);
