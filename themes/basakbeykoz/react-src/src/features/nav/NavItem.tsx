import React from 'react';
import { wpMenuItem } from '../wordpress/@types-wp';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { setDisplaying } from '../app/appActions'
import './_navItem.scss';

interface OwnProps {
    item: wpMenuItem;
}

const mapState = (state: RootState) => ({
    refs: state.app.refs
});

const mapDispatch = { 
    setDisplaying,
}

interface OwnProps { }
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function NavItem(props: Props) {
    const { item, refs, setDisplaying } = props;
    const cleanSlug = !!item.slug
        ? item.slug
        : "";

    const setDisplayingAction = (slug: string) => {
        setDisplaying({
            slug,
        });  
        refs.body?.current?.osInstance()?.scroll(0, 500, 'easeInOutSine');
    }

    return (
        <NavLink 
            key={item.ID}
            exact
            to={"/" + cleanSlug}
            className="Nav-item"
            activeClassName="Nav-item-active"
            onClick={() => setDisplayingAction(cleanSlug)}
            >{item.title}
        </NavLink>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(NavItem);
