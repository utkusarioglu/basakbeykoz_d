import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';
import config from '../../../config';
import './_share.view.scss';

interface Props {
  title: string;
  excerpt: string;
}

function ShareView({ title, excerpt }: Props) {
  const url = window.location.href;
  const commonClass = 'ShareView-list-button-';
  const size = 36;
  return (
    <ol {...{ className: 'ShareView' }}>
      <li {...{ className: 'ShareView__item' }}>
        <FacebookShareButton
          {...{
            url,
            quote: title,
            className: `${commonClass}facebook`,
          }}
        >
          <FacebookIcon {...{ size }} />
          <p>Facebook</p>
        </FacebookShareButton>
      </li>

      <li {...{ className: 'ShareView__item' }}>
        <TwitterShareButton
          {...{
            url,
            title,
            className: `${commonClass}twitter`,
          }}
        >
          <TwitterIcon {...{ size }} />
          <p>Twitter</p>
        </TwitterShareButton>
      </li>

      <li {...{ className: 'ShareView__item' }}>
        <WhatsappShareButton
          {...{
            url,
            title,
            separator: config.APP_SEPARATOR,
            className: `${commonClass}whatsapp`,
          }}
        >
          <WhatsappIcon {...{ size }} />
          <p>WhatsApp</p>
        </WhatsappShareButton>
      </li>

      <li {...{ className: 'ShareView__item' }}>
        <LinkedinShareButton
          {...{
            source: url,
            url,
            title,
            summary: excerpt,
            className: `${commonClass}linkedin`,
          }}
        >
          <LinkedinIcon {...{ size }} />
          <p>LinkedIn</p>
        </LinkedinShareButton>
      </li>
    </ol>
  );
}

export default ShareView;
