import React  from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setDisplaying } from '../app/appActions'
import CSS from 'csstype';
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
    header: {
        position: "fixed",
        top: "var(--accent-thickness)",
        left: 0,
        zIndex: 1,
        display: "grid",
        alignItems: "center",
        gridColumnGap: "calc( var(--accent-thickness) / 2)",
        gridAutoFlow: "column",
    },
    decor: {
        width: "var(--accent-thickness)",
        height: "var(--head-section-height)",
        background: "var(--blue)",
        left: 0,
    },
    logoImg: {
        width: "340px",
        filter: "var(--logo-white-filter)",
    }
}

function Header(props: Props): React.FunctionComponentElement<Props> {

    const setDisplaying = () => {
        props.setDisplaying({
            slug: process.env.REACT_APP_HOME_SLUG as string
        })        
    }

    const uploads = process.env.REACT_APP_UPLOADS_DIR;

    return (
        <header style={styles.header}>
            <div style={styles.decor} />
            <Link
                onClick={setDisplaying}
                to="/">
                <div 
                    className="logo"
                    >
                    <img 
                        src={ uploads + "/logo-inline-color.svg"}
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
