import React from 'react';
import NavFeature from '../../features/nav/Nav.feature';
import { connect, ConnectedProps } from 'react-redux';
import { setIsMenuOpen } from '../../features/app/appActions';
import { RootState } from '../../store/rootReducer';
import './_navFixed.view.scss';

const mapState = (state: RootState) => ({
  isMenuOpen: state.app.isMenuOpen,
});
const mapDispatch = {
  setIsMenuOpen,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function NavFixedView(props: Props) {
  const { setIsMenuOpen, isMenuOpen } = props;
  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      {...{
        onClick: menuToggle,
        className: 'NavFixedView ' + (isMenuOpen ? 'open' : ''),
      }}
    >
      <div {...{ className: 'NavFixedView-mask' }} />
      <div {...{ className: 'NavFixedView-decor' }} />
      <div {...{ className: 'NavFixedView-list' }}>
        <NavFeature />
      </div>
    </div>
  );
}

export default connector(NavFixedView);
