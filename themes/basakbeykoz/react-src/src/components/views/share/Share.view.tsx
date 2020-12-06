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
import './_share.view.scss';

interface Props {
  title: string;
  excerpt: string;
}

function ShareView({ title, excerpt }: Props) {
  const url = window.location.href;
  const commonClass = 'Share-';
  const size = 36;
  // const title = 'this is the title';
  return (
    <div {...{ className: 'Share' }}>
      <div {...{ className: 'Share-frame' }}>
        <span>Bu sayfayı paylaşın</span>
        <div {...{ className: 'Share-frame-buttons' }}>
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
              separator: ' - ',
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
      </div>
    </div>
  );
}

export default ShareView;
