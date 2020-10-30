import React from 'react';
import { Link } from 'react-router-dom';
import './_logo.view.scss';
import config from '../../../config';

const { UPLOADS_DIR } = config;

interface Props {
  withTitle: boolean;
  linkClick: () => void;
}

function LogoView({ linkClick, withTitle }: Props) {
  const logoName = withTitle
    ? 'inline-logo-w-color-title@100px.png'
    : 'inline-logo-w-color@100px.png';

  return (
    <div {...{ className: 'Logo' }}>
      <div {...{ className: 'Logo-decor' }} />
      <Link {...{ onClick: linkClick, to: '/' }}>
        <div {...{ className: 'Logo-logo' }}>
          <img {...{ src: `${UPLOADS_DIR}/${logoName}`, alt: 'logo' }} />
        </div>
      </Link>
    </div>
  );
}

export default LogoView;
