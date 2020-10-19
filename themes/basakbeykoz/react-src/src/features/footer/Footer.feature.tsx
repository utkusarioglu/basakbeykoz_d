import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import FooterView from '../../views/footer/Footer.view';
import { RootState } from '../../store/rootReducer';
import { setIsMenuOpen } from '../app/appActions';

const mapState = (state: RootState) => ({
  refs: state.app.refs,
});
const mapDispatch = {
  setIsMenuOpen,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function FooterFeature(props: Props) {
  const { setIsMenuOpen, refs } = props;
  const navClickActions = () => {
    setIsMenuOpen(false);
    refs.body?.current?.osInstance()?.scroll(0, 500, 'easeInOutSine');
  };

  return <FooterView {...{ navClickActions }} />;
}

export default connector(FooterFeature);
