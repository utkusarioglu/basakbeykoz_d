import React from 'react';
import ShareFeature from '../../features/share/Share.feature';
import { connect, ConnectedProps } from 'react-redux';
import { closeAnyMenu } from '../../features/app/appActions';
import { RootState } from '../../../store/rootReducer';
import './_shareMenu.layout.scss';
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

function ShareMenuLayout({ closeAnyMenu, openMenu }: Props) {
  return (
    <div
      {...{
        onClick: closeAnyMenu,
        className: 'ShareMenuView ' + (openMenu === 'share' ? 'open' : ''),
      }}
    >
      <div {...{ className: 'ShareMenuView-mask' }} />
      <div {...{ className: 'ShareMenuView-decor' }} />
      <div {...{ className: 'ShareMenuView-list' }}>
        <OverlayScrollbarsComponent
          {...{
            className: 'ShareMenuView-list-scrollable',
            options: {
              paddingAbsolute: true,
            },
          }}
        >
          <ShareFeature />
        </OverlayScrollbarsComponent>
      </div>
    </div>
  );
}

export default connector(ShareMenuLayout);
