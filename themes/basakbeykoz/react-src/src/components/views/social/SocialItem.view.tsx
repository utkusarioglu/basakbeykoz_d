import React from 'react';
import { ISocialItem } from '../../features/social/@types-social';
import ReactGA from 'react-ga';
import './_socialItem.view.scss';

type Props = ISocialItem & {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

function SocialItemView({ title, link, icon, setIsMenuOpen }: Props) {
  return (
    <ReactGA.OutboundLink
      {...{
        eventLabel: title,
        onClick: () => setIsMenuOpen(false),
        to: link,
        target: '_blank',
      }}
    >
      <img
        {...{
          className: 'Social-item',
          src: icon,
          title,
          alt: title,
        }}
      />
    </ReactGA.OutboundLink>
  );
}

export default SocialItemView;
export type SocialItemOwnProps = Props;
