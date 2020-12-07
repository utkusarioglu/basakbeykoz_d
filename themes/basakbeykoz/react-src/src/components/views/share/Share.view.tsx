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
    <div {...{ className: 'ShareView' }}>
      <FacebookShareButton
        {...{
          url,
          quote: title,
          className: `${commonClass}facebook`,
        }}
      >
        <FacebookIcon {...{ size }} />
      </FacebookShareButton>

      <TwitterShareButton
        {...{
          url,
          title,
          className: `${commonClass}twitter`,
        }}
      >
        <TwitterIcon {...{ size }} />
      </TwitterShareButton>

      <WhatsappShareButton
        {...{
          url,
          title,
          separator: config.APP_SEPARATOR,
          className: `${commonClass}whatsapp`,
        }}
      >
        <WhatsappIcon {...{ size }} />
      </WhatsappShareButton>

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
      </LinkedinShareButton>
    </div>
  );
}

export default ShareView;
