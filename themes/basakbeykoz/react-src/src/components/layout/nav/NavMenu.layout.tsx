import React from 'react';
import NavFeature from '../../features/nav/Nav.feature';
import { connect, ConnectedProps } from 'react-redux';
import { closeAnyMenu } from '../../features/app/appActions';
import { RootState } from '../../../store/rootReducer';
import './_navMenu.layout.scss';
import SocialFeature from '../../features/social/Social.feature';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const mapState = (state: RootState) => ({
  openMenu: state.app.openMenu,
});
const mapDispatch = {
  closeAnyMenu,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function NavMenuLayout({ closeAnyMenu, openMenu }: Props) {
  return (
    <div
      {...{
        onClick: closeAnyMenu,
        className: 'NavMenuView ' + (openMenu === 'nav' ? 'open' : ''),
      }}
    >
      <div {...{ className: 'NavMenuView-mask' }} />
      <div {...{ className: 'NavMenuView-decor' }} />
      <div {...{ className: 'NavMenuView-list' }}>
        <OverlayScrollbarsComponent
          {...{
            className: 'NavMenuView-list-scrollable',
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

export default connector(NavMenuLayout);
