import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { wpMenuItem } from '../wordpress/@types-wp';
import { RootState } from '../../store/rootReducer';
import { fetchMenu } from "../wordpress/menuActions";
import { setIsMenuOpen } from '../app/appActions'
import './_nav.scss';
import NavItem from './NavItem';

const mapState = (state: RootState) => ({
    menu: state.menu,
});

const mapDispatch = { 
    fetchMenu, 
    setIsMenuOpen,
}

interface OwnProps { }
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function Nav(props: Props) {

    const fetchMenu = props.fetchMenu; 
    useEffect(() => {
        fetchMenu("nav");
    }, [fetchMenu])

    const menuItems: JSX.Element[] = props.menu.items
        .map((item: wpMenuItem) => <NavItem key={item.ID} item={item} /> )

    return <nav>{menuItems}</nav>
}


export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(Nav);
