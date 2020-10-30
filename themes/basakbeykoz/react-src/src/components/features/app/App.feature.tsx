import React, { createRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { setRef } from './appActions';
import AppLayout from '../../layout/app/App.layout';
import { RootState } from '../../../store/rootReducer';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { SET_REF_TYPES } from './@types-app';

const mapState = (state: RootState) => ({
  refs: state.app.refs,
});
const mapDispatch = {
  setRef,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function AppFeature({ refs, setRef }: Props) {
  if (!refs.body) {
    setRef({
      type: SET_REF_TYPES.Body,
      ref: createRef<OverlayScrollbarsComponent>(),
    });
  }

  return (
    <Router>
      <AppLayout {...{ refs }} />
    </Router>
  );
}

export default connector(AppFeature);
