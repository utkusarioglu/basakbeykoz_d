import React from 'react';
import { SocialItem } from '../../features/social/@types-social';
import { closeAnyMenu } from '../../features/app/appActions';
import ReactGA from 'react-ga';
import './_socialItem.view.scss';

type Props = SocialItem & {
  closeAnyMenu: typeof closeAnyMenu;
};

function SocialItemView({ title, link, icon, closeAnyMenu }: Props) {
  return (
    <ReactGA.OutboundLink
      {...{
        eventLabel: title,
        onClick: closeAnyMenu,
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
