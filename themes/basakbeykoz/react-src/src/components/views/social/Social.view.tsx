import React from 'react';
import { ISocialItem } from '../../features/social/@types-social';
import SocialItemView from './SocialItem.view';
import './_social.view.scss';

interface Props {
  socialItems: ISocialItem[];
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

function SocialView({ socialItems, setIsMenuOpen }: Props) {
  return (
    <div {...{ className: 'Social-list' }}>
      {socialItems.map((item) => (
        <SocialItemView {...{ key: item.title, ...item, setIsMenuOpen }} />
      ))}
    </div>
  );
}

export default SocialView;
