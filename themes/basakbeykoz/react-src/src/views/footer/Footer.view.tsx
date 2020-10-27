import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import '../../styles/components/footer/_footer.view.scss';

const { UPLOADS_DIR } = config;

interface Props {
  navClickActions: () => void;
}

function FooterView({ navClickActions }: Props) {
  return (
    <div {...{ className: 'Footer' }}>
      <div {...{ className: 'Footer-backdrop' }} />
      <div {...{ className: 'Footer-elements' }}>
        <div {...{ className: 'Footer-elements-art' }}>
          <img
            {...{
              className: 'Footer-elements-art-fg',
              alt: 'Footer decoration',
              src: UPLOADS_DIR + '/footer-art-fg.svg',
            }}
          />
        </div>
        <Link {...{ onClick: navClickActions, to: '/credits' }}>
          <div {...{ className: 'Footer-elements-credits' }}>
            <span {...{ className: 'Footer-elements-credits-yearAndName' }}>
              ♡
              <br />
              {new Date(Date.now()).getFullYear()}
              <br />
              Başak Beykoz
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FooterView;
