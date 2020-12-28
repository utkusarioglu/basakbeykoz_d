import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { closeAnyMenu } from '../../features/app/appActions';

import SocialView from '../../views/social/Social.view';

const mapState = (state: RootState) => ({});
const mapDispatch = {
  closeAnyMenu,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function SocialFeature({ closeAnyMenu }: Props) {
  // @ts-ignore
  /// props from redux seems to return the wrong type for closeAnyMenu
  // Check if this is a bug
  return <SocialView {...{ closeAnyMenu }} />;
}

export default connector(SocialFeature);
