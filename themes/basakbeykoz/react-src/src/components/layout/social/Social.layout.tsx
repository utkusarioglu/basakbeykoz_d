import React from 'react';
import SocialFeature from '../../features/social/Social.feature';
import './_social.layout.scss';

function SocialLayout() {
  return (
    <div {...{ className: 'Social' }}>
      <SocialFeature />
      <div {...{ className: 'Social-decor' }} />
    </div>
  );
}

export default SocialLayout;
