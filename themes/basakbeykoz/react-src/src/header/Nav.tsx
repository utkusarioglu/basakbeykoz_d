import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchMenu } from "../wp/menuActions";
// import { fetchPost, fetchCategoryPosts } from '../wp/postActions';
import { setDisplaying } from '../app/appActions'
// import { fetchSingular } from "../wp/singularActions";
import CSS from 'csstype';
import { wpMenuItem } from '../wp/@types-wp';
import { RootState } from '../app/rootReducer';
import "./_header_nav.scss"

const mapState = (state: RootState) => ({
    menu: state.menu,
    isDisplaying: state.app.isDisplaying,
    // singular: state.singular.archive,
});

const mapDispatch = { 
    // setFetching,
    setDisplaying,
    fetchMenu, 
    // fetchPost, 
    // fetchSingular,
    // fetchCategoryPosts,
}

interface OwnProps { }
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

// TODO better static typing for style elements
const styles: { [className: string]: CSS.Properties} = {
    // navDecor: {
    //     width: "var(--accent-thickness)",
    //     height: "100%",
    //     background: "var(--yellow)",
    //     position: "absolute",
    //     right: 0,
    // },
    // navWrap: {
    //     padding: "5px",
    //     position: "fixed",
    //     right: 0,
    //     top: "50%",
    //     transform: "translateY(-50%)",
    //     zIndex: 10,
    // },
    // navList: {
    //     display: "flex",
    //     flexDirection: "column",
    //     padding: "30px 30px 30px 0",
    // },
    // navItem: {
    //     padding: "10px 15px",
    //     textDecoration: "none",
    //     fontSize: "24px",
    //     textAlign: "right",
    //     color: "var(--blue)",
    // },
    navItemActive: {
        color: "red"
    }
}

function Nav(
    props: Props
): React.FunctionComponentElement<Props> {

    const ud = process.env.REACT_APP_UPLOADS_DIR as string;
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const fetchMenu = props.fetchMenu; 
    useEffect(() => {
        fetchMenu("nav");
    }, [fetchMenu])

    const setDisplaying = (slug: string) => {
        props.setDisplaying({
            slug,
        });        
    }

    // let menuIsOpen = false;
    const menuToggle = () => {
        // alert("yeh")
        setMenuIsOpen((menuIsOpen) => !menuIsOpen);
        // menuIsOpen = !menuIsOpen;
    }

    const menuItems: JSX.Element[] = props.menu.items
        .map((item: wpMenuItem) => {
            return (
                <NavLink 
                    key={item.ID}
                    exact
                    to={"/" + item.slug}
                    className="Nav-list-item"
                    // style={styles.navItem}
                    activeStyle={styles.navItemActive}
                    onClick={() => setDisplaying(item.slug)}
                    >{item.title}
                </NavLink>
            )
        })

    return (
        <div className="Nav">
            <div className="Nav-decor" />
            <div className="Nav-wrap">
                <button 
                    onClick={menuToggle}
                    className="Nav-burgerButton">
                    <img 
                        alt="Menu"
                        src={ud + "/burger-menu.svg"} />
                </button>
                <div 
                    onClick={menuToggle}
                    className={"Nav-mask " + (menuIsOpen ? "open" : "") 
                    }>
                    <nav className={ "Nav-list"}>
                        {menuItems}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(Nav);
