import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { setIsMenuOpen } from '../../features/app/appActions';

import SocialView from '../../views/social/Social.view';

const mapState = (state: RootState) => ({});
const mapDispatch = {
  setIsMenuOpen,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function SocialFeature({ setIsMenuOpen }: Props) {
  return <SocialView {...{ setIsMenuOpen }} />;
}

export default connector(SocialFeature);
