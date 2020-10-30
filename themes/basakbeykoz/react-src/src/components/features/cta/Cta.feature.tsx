import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store/rootReducer';

import CtaView from '../../views/cta/Cta.view';

const mapState = (state: RootState) => ({
  refs: state.app.refs,
});
const mapDispatch = {};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function CtaFeature({ refs }: Props) {
  const ctaAction = () =>
    refs.body?.ref.current
      ?.osInstance()
      ?.scroll(
        document.getElementsByClassName('wp-block-group')[1] as HTMLElement,
        1000,
        'easeOutExpo'
      );

  return <CtaView {...{ ctaAction }} />;
}

export default connector(CtaFeature);
