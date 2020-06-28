import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchMenu } from "../wp/menuActions";
import { setDisplaying } from '../app/appActions'
import { wpMenuItem } from '../wp/@types-wp';
import { RootState } from '../app/rootReducer';
import "./_nav.scss";

const mapState = (state: RootState) => ({
    menu: state.menu,
    isDisplaying: state.app.isDisplaying,
    // singular: state.singular.archive,
});

const mapDispatch = { 
    setDisplaying,
    fetchMenu, 
}

interface OwnProps { }
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

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

    const menuToggle = () => {
        setMenuIsOpen((menuIsOpen) => !menuIsOpen);
    }

    const menuItems: JSX.Element[] = props.menu.items
        .map((item: wpMenuItem) => {

            const clean_slug = item.slug !== undefined
                ? item.slug
                : "";

            return (
                <NavLink 
                    key={item.ID}
                    exact
                    to={"/" + clean_slug}
                    className="Nav-list-item"
                    activeClassName="Nav-list-item-active"
                    onClick={() => setDisplaying(clean_slug)}
                    >{item.title}
                </NavLink>
            )
        })

    return (
        <div className="Nav">
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
                    className={"Nav-listContainer " + (menuIsOpen ? "open" : "") 
                }>
                    <div className="Nav-mask" />
                    <nav className="Nav-list">
                        {menuItems}
                    </nav>
                </div>
            </div>
            <div className="Nav-decor" />
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(Nav);
