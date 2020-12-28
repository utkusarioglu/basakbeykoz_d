import React from 'react';
import { RootState } from '../../../store/rootReducer';
import { setDisplaying, closeAnyMenu } from '../app/appActions';
import { connect, ConnectedProps } from 'react-redux';
import config from '../../../config';
import LogoView from '../../views/logo/Logo.view';

const { HOME_SLUG } = config;

const mapState = (state: RootState) => ({
  refs: state.app.refs,
});
const mapDispatch = {
  setDisplaying,
  closeAnyMenu,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function LogoFeature({ setDisplaying, closeAnyMenu, refs }: Props) {
  const linkClick = () => {
    closeAnyMenu();
    setDisplaying({
      slug: HOME_SLUG,
    });
    refs.body?.ref.current?.osInstance()?.scroll(0, 500, 'easeInOutSine');
  };

  const withTitle = false;

  return <LogoView {...{ withTitle, linkClick }} />;
}

export default connector(LogoFeature);
