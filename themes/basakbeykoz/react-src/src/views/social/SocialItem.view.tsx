import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ISocialItem } from '../../features/social/@types-social';
import { setIsMenuOpen } from '../../features/app/appActions';
import ReactGA from 'react-ga';
import { RootState } from '../../store/rootReducer';
import '../../styles/components/social/_socialItem.view.scss';

const mapState = (state: RootState) => ({});
const mapDispatch = {
  setIsMenuOpen,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type OwnProps = ISocialItem;
type Props = OwnProps & PropsFromRedux;

function SocialItem({ title, link, icon, setIsMenuOpen }: Props) {
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

export default connector(SocialItem);
export type SocialItemOwnProps = OwnProps;
