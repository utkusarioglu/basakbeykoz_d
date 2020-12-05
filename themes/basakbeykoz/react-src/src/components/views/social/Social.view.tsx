import React from 'react';
// import { ISocialItem } from '../../features/social/@types-social';
import SocialItemView from './SocialItem.view';
import config from '../../../config';
import './_social.view.scss';

interface Props {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

function SocialView({ setIsMenuOpen }: Props) {
  const socialItems = config.SOCIAL_ITEMS;

  console.log('social items', socialItems);

  return (
    <div {...{ className: 'Social-list' }}>
      {socialItems &&
        socialItems.map((item) => (
          <SocialItemView
            {...{
              key: item.title,
              setIsMenuOpen,
              ...item,
            }}
          />
        ))}
    </div>
  );
}

export default SocialView;
