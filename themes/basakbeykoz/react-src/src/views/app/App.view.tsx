import React from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { RootState } from '../../store/rootReducer';

import SpinnerFeature from '../../features/spinner/Spinner.feature';
import AppRoutes from '../../features/app/AppRoutes.feature';
import FooterFeature from '../../features/footer/Footer.feature';

import Header from '../header/Header.view';
import Logo from '../header/Logo.view';
import Social from '../social/Social.view';
import NavFixedView from '../nav/NavFixed.view';

import './_app.view.scss';

interface OwnProps {
  refs: RootState['app']['refs'];
}

type Props = OwnProps;

function AppView(props: Props) {
  const { refs } = props;
  return (
    <div {...{ className: 'App' }}>
      <SpinnerFeature />
      <NavFixedView />
      <Header />
      <div {...{ className: 'App-wideScreenControls' }}>
        <Logo {...{ withTitle: false }} />
        <Social />
      </div>
      <OverlayScrollbarsComponent
        {...{
          ref: refs.body,
          className: 'App-scrollWindow',
          options: {
            paddingAbsolute: true,
            scrollbars: {
              autoHide: 'leave',
            },
          },
        }}
      >
        <div
          {...{
            className: 'App-scrollingElements',
          }}
        >
          <AppRoutes />
          <FooterFeature />
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
}

export default AppView;
