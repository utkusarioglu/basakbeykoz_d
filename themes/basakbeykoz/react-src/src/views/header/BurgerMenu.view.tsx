import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { fetchMenu } from '../../features/wordpress/menuActions';
import { setDisplaying, setIsMenuOpen } from '../../features/app/appActions';
import { RootState } from '../../store/rootReducer';
import { Env } from '../../common/@types-common';
import './_burgerMenu.view.scss';

const mapState = (state: RootState) => ({
  menu: state.menu,
  isDisplaying: state.app.isDisplaying,
  isMenuOpen: state.app.isMenuOpen,
});
const mapDispatch = {
  setDisplaying,
  fetchMenu,
  setIsMenuOpen,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function BurgerMenu(props: Props) {
  const { REACT_APP_UPLOADS_DIR } = process.env as Env;
  const { isMenuOpen, setIsMenuOpen } = props;

  return (
    <div {...{ className: 'BurgerMenu' }}>
      <button
        {...{
          onClick: () => setIsMenuOpen(!isMenuOpen),
          className: 'BurgerMenu-burgerButton',
        }}
      >
        <img
          {...{ alt: 'Menu', src: REACT_APP_UPLOADS_DIR + '/burger-menu.svg' }}
        />
      </button>
    </div>
  );
}

export default connector(BurgerMenu);
