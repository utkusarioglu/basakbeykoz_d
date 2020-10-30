import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
// import { fetchMenu } from '../wordpress/menuActions';
import { setDisplaying, setIsMenuOpen } from '../app/appActions';
import { RootState } from '../../../store/rootReducer';
import BurgerMenuButtonView from '../../views/burgerMenuButton/BurgerMenuButton.view';

const mapState = (state: RootState) => ({
  menu: state.menu,
  isDisplaying: state.app.isDisplaying,
  isMenuOpen: state.app.isMenuOpen,
});
const mapDispatch = {
  setDisplaying,
  setIsMenuOpen,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function BurgerMenuButtonFeature({ isMenuOpen, setIsMenuOpen }: Props) {
  return <BurgerMenuButtonView {...{ isMenuOpen, setIsMenuOpen }} />;
}

export default connector(BurgerMenuButtonFeature);
