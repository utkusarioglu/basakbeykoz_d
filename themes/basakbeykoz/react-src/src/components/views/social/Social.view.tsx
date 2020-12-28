import React from 'react';
// import { ISocialItem } from '../../features/social/@types-social';
import SocialItemView from './SocialItem.view';
import config from '../../../config';
import type { closeAnyMenu } from '../../features/app/appActions';
import './_social.view.scss';

interface Props {
  closeAnyMenu: typeof closeAnyMenu;
}

function SocialView({ closeAnyMenu }: Props) {
  const socialItems = config.SOCIAL_ITEMS;

  return (
    <div {...{ className: 'Social-list' }}>
      {socialItems &&
        socialItems.map((item) => (
          <SocialItemView
            {...{
              key: item.title,
              closeAnyMenu,
              ...item,
            }}
          />
        ))}
    </div>
  );
}

export default SocialView;
