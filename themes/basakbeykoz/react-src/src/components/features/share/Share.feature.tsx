import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import ShareView from '../../views/share/Share.view';

const mapState = (state: RootState) => ({
  title: state.app.isDisplaying.active.title,
  excerpt: state.app.isDisplaying.active.excerpt,
});
const mapDispatch = {};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function ShareFeature({ title, excerpt }: Props) {
  return <ShareView {...{ title, excerpt }} />;
}

export default connector(ShareFeature);
