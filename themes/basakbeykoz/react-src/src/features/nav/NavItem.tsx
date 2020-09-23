import React from 'react';
import { wpMenuItem } from '../wp/@types-wp';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { setDisplaying } from '../app/appActions'
import './_navItem.scss';

interface OwnProps {
    item: wpMenuItem;
}

const mapState = (state: RootState) => ({});

const mapDispatch = { 
    setDisplaying,
}

interface OwnProps { }
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function NavItem(props: Props) {
    const { item } = props;
    const cleanSlug = !!item.slug
        ? item.slug
        : "";

    const setDisplaying = (slug: string) => {
        props.setDisplaying({
            slug,
        });        
    }

    return (
        // <div className="Nav-item-wrapper">
        <NavLink 
            key={item.ID}
            exact
            to={"/" + cleanSlug}
            className="Nav-item"
            activeClassName="Nav-item-active"
            onClick={() => setDisplaying(cleanSlug)}
            >{item.title}
        </NavLink>
        // </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(NavItem);
