import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import './_footer.view.scss';

const { APP_NAME } = config;

interface Props {
  navClickActions: () => void;
}

function FooterView({ navClickActions }: Props) {
  return (
    <Link {...{ onClick: navClickActions, to: '/credits' }}>
      <div {...{ className: 'Footer-elements-credits' }}>
        <span {...{ className: 'Footer-elements-credits-yearAndName' }}>
          ♡
          <br />
          {new Date(Date.now()).getFullYear()}
          <br />
          {APP_NAME}
        </span>
      </div>
    </Link>
  );
}

export default FooterView;
