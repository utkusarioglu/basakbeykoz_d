import React from 'react';

import BurgerMenuButtonFeature from '../../features/burger-menu-button/burgerMenuButton.feature';
import HeaderLogoFeature from '../../features/headerLogo/HeaderLogo.feature';
import ShareMenuButtonFeature from '../../features/share-menu-button/ShareMenuButton.feature';
import SocialFeature from '../../features/social/Social.feature';
import NavHeaderView from '../nav/NavHeader.layout';

import './_header.layout.scss';

function HeaderLayout() {
  return (
    <header {...{ className: 'Header' }}>
      <div {...{ className: 'Header-bottomWrap' }}>
        <HeaderLogoFeature />
        <NavHeaderView />
        <SocialFeature />
        <ShareMenuButtonFeature />
        <BurgerMenuButtonFeature />
      </div>
    </header>
  );
}

export default HeaderLayout;
