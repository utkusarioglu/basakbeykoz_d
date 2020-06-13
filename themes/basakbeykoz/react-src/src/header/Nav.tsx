import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchMenu } from "../wp/menuActions";
// import { fetchPost, fetchCategoryPosts } from '../wp/postActions';
import { setDisplaying } from '../app/appActions'
// import { fetchSingular } from "../wp/singularActions";
import CSS from 'csstype';
import { wpMenuItem } from '../wp/@types-wp'
import { RootState } from '../app/rootReducer'

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
    navDecor: {
        width: "var(--accent-thickness)",
        height: "100%",
        background: "var(--yellow)",
        position: "absolute",
        right: 0,
    },
    navWrap: {
        padding: "5px",
        position: "fixed",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
    },
    navList: {
        display: "flex",
        flexDirection: "column",
        padding: "30px 30px 30px 0",
    },
    navItem: {
        padding: "10px 15px",
        textDecoration: "none",
        fontSize: "24px",
        textAlign: "right",
        color: "var(--blue)",
    },
    navItemActive: {
        color: "red"
    }
}

function Nav(
    props: Props
): React.FunctionComponentElement<Props> {
    const fetchMenu = props.fetchMenu; 
    useEffect(() => {
        fetchMenu("nav");
    }, [fetchMenu])

    const setDisplaying = (slug: string) => {
        props.setDisplaying({
            slug: slug
        });        
    }

    const menuItems: JSX.Element[] = props.menu.items
        .map((item: wpMenuItem) => {
            return (
                <NavLink 
                    key={item.ID}
                    exact
                    to={"/" + item.slug}
                    style={styles.navItem}
                    activeStyle={styles.navItemActive}
                    onClick={() => setDisplaying(item.slug)}
                    >{item.title}
                </NavLink>
            )
        })

    return (
        <div style={styles.navWrap}>
            <div style={styles.navDecor} />
            <nav style={styles.navList}>
                {menuItems}
            </nav>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(Nav);
