import React from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { RootState } from '../../../store/rootReducer';

import SpinnerFeature from '../../features/spinner/Spinner.feature';
import AppRoutesFeature from '../../features/app/AppRoutes.feature';
import FooterLayout from '../../layout/footer/Footer.layout';
import HeaderLayout from '../header/Header.layout';
import LogoFeature from '../../features/logo/Logo.feature';
import NavFixedLayout from '../nav/NavFixed.layout';

import './_app.layout.scss';
import SocialLayout from '../social/Social.layout';
import ShareFixedLayout from '../share/ShareFixed.layout';

interface OwnProps {
  refs: RootState['app']['refs'];
}

type Props = OwnProps;

function AppLayout({ refs }: Props) {
  return (
    <div {...{ className: 'App' }}>
      <SpinnerFeature />
      <NavFixedLayout />
      <HeaderLayout />
      <div {...{ className: 'App-wideScreenControls' }}>
        <LogoFeature {...{ withTitle: false }} />
        <SocialLayout />
        <ShareFixedLayout />
      </div>
      <OverlayScrollbarsComponent
        {...{
          ref: refs.body?.ref,
          className: 'App-scrollWindow',
          options: {
            paddingAbsolute: true,
            scrollbars: {
              autoHide: 'leave',
            },
          },
        }}
      >
        <div {...{ className: 'App-scrollingElements' }}>
          <AppRoutesFeature />
          <FooterLayout />
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
}

export default AppLayout;
