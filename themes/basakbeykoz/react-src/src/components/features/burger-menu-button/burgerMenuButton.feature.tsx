import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { setOpenMenu } from '../app/appActions';
import { OpenMenu } from '../app/@types-app';
import { RootState } from '../../../store/rootReducer';
import BurgerMenuButtonView from '../../views/burger-menu-button/BurgerMenuButton.view';

const mapState = (state: RootState) => ({
  openMenu: state.app.openMenu,
});
const mapDispatch = {
  setOpenMenu,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

const BurgerMenuButtonFeature: FC<Props> = ({ openMenu, setOpenMenu }) => {
  const setOpenMenuToggle: (type: OpenMenu) => void = (type) => {
    if (openMenu === 'none') {
      setOpenMenu(type);
    } else if (openMenu === type) {
      setOpenMenu('none');
    } else {
      setOpenMenu(type);
    }
  };

  return <BurgerMenuButtonView {...{ setOpenMenuToggle }} />;
};

export default connector(BurgerMenuButtonFeature);
