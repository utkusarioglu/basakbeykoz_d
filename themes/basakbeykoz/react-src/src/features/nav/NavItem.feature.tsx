import React from 'react';
import { wpMenuItem } from '../wordpress/@types-wordpress';
import { connect, ConnectedProps } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { setDisplaying } from '../app/appActions';
import config from '../../config';
import './_navItem.scss';

const { HOME_SLUG } = config;
const mapState = (state: RootState) => ({
  refs: state.app.refs,
});
const mapDispatch = {
  setDisplaying,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {
  item: wpMenuItem;
}
type Props = OwnProps & PropsFromRedux;

function NavItemFeature({ item, refs, setDisplaying }: Props) {
  const cleanSlug = !!item.slug ? item.slug : '';
  const clickSlug = cleanSlug || (HOME_SLUG as string);

  const setDisplayingAction = (slug: string) => {
    setDisplaying({
      slug,
    });
    refs.body?.ref.current?.osInstance()?.scroll(0, 500, 'easeInOutSine');
  };

  return (
    <NavLink
      {...{
        key: item.ID,
        exact: true,
        to: '/' + cleanSlug,
        className: 'Nav-item',
        activeClassName: 'Nav-item-active',
        onClick: () => setDisplayingAction(clickSlug),
      }}
    >
      {item.title}
    </NavLink>
  );
}

export default connector(NavItemFeature);
