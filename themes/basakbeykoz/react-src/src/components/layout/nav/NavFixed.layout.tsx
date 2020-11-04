import React from 'react';
import NavFeature from '../../features/nav/Nav.feature';
import { connect, ConnectedProps } from 'react-redux';
import { setIsMenuOpen } from '../../features/app/appActions';
import { RootState } from '../../../store/rootReducer';
import './_navFixed.layout.scss';
import SocialFeature from '../../features/social/Social.feature';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

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

function NavFixedLayout({ setIsMenuOpen, isMenuOpen }: Props) {
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
        <OverlayScrollbarsComponent
          {...{
            className: 'NavFixedView-list-scrollable',
            options: {
              paddingAbsolute: true,
              // scrollbars: {
              //   autoHide: 'leave',
              // },
            },
          }}
        >
          <NavFeature />
        </OverlayScrollbarsComponent>
        <SocialFeature />
      </div>
    </div>
  );
}

export default connector(NavFixedLayout);
