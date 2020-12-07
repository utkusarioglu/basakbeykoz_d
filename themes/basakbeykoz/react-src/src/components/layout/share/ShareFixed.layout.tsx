import React from 'react';
import ShareFeature from '../../features/share/Share.feature';
import './_shareFixed.layout.scss';

function ShareFixedLayout() {
  return (
    <div {...{ className: 'ShareFixedLayout' }}>
      <div {...{ className: 'ShareFixedLayout-titled' }}>
        <span>Bu sayfayı paylaşın</span>
        <ShareFeature />
      </div>
      <div {...{ className: 'ShareFixedLayout-decor' }} />
    </div>
  );
}

export default ShareFixedLayout;
