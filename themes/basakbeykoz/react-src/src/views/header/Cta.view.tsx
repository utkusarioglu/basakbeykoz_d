import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import './_cta.view.scss';

const mapState = (state: RootState) => ({
  refs: state.app.refs,
});
const mapDispatch = {};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function Cta(props: Props) {
  const { refs } = props;
  const ctaAction = () =>
    refs.body?.current
      ?.osInstance()
      ?.scroll(
        document.getElementsByClassName('wp-block-group')[1] as HTMLElement,
        1000,
        'easeOutExpo'
      );

  return (
    <div {...{ className: 'Cta' }}>
      <div {...{ className: 'Cta-button', onClick: ctaAction }}>
        <div {...{ className: 'Cta-text' }}>Bir adım atın</div>
      </div>
    </div>
  );
}

export default connector(Cta);
