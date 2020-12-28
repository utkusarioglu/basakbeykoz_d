import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { closeAnyMenu } from '../app/appActions';
import FooterView from '../../views/footer/Footer.view';

const mapState = (state: RootState) => ({
  refs: state.app.refs,
});
const mapDispatch = {
  closeAnyMenu,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function FooterFeature({ closeAnyMenu, refs }: Props) {
  const navClickActions = () => {
    closeAnyMenu();
    refs.body?.ref.current?.osInstance()?.scroll(0, 0);
  };

  return <FooterView {...{ navClickActions }} />;
}

export default connector(FooterFeature);
