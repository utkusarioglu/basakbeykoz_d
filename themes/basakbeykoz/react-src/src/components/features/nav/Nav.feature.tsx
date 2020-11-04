import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { fetchMenu } from '../wordpress/menuActions';
import { setDisplaying } from '../app/appActions';
import { setIsMenuOpen } from '../app/appActions';
import NavView from '../../views/nav/Nav.view';

const mapState = (state: RootState) => ({
  menu: state.menu,
  refs: state.app.refs,
});
const mapDispatch = {
  fetchMenu,
  setIsMenuOpen,
  setDisplaying,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function NavFeature({ menu, fetchMenu, setDisplaying, refs }: Props) {
  useEffect(() => {
    fetchMenu('nav');
  }, [fetchMenu]);

  const clickSetDisplaying = (slug: string) => {
    setDisplaying({
      slug,
    });
    refs.body?.ref.current?.osInstance()?.scroll(0, 500, 'easeInOutSine');
  };

  return (
    <NavView
      {...{
        items: menu.items,
        clickSetDisplaying,
      }}
    />
  );
}

export default connector(NavFeature);
