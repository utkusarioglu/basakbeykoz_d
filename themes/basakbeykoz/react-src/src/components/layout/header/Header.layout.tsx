import React from 'react';

import BurgerMenuButtonFeature from '../../features/burgerMenuButton/burgerMenuButton.feature';
import HeaderLogoFeature from '../../features/headerLogo/HeaderLogo.feature';
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
        <BurgerMenuButtonFeature />
      </div>
    </header>
  );
}

export default HeaderLayout;
