import React from 'react';
import config from '../../../config';
import FooterFeature from '../../features/footer/Footer.feature';
import './_footer.layout.scss';

const { UPLOADS_DIR } = config;

function FooterLayout() {
  return (
    <div {...{ className: 'Footer' }}>
      <div {...{ className: 'Footer-backdrop' }} />
      <div {...{ className: 'Footer-elements' }}>
        <FooterFeature />
        <div {...{ className: 'Footer-elements-art' }}>
          <img
            {...{
              className: 'Footer-elements-art-fg',
              alt: 'Footer decoration',
              src: UPLOADS_DIR + '/footer-art-fg.svg',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FooterLayout;
