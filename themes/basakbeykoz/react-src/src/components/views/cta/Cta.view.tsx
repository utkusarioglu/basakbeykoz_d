import React from 'react';
import './_cta.view.scss';

interface Props {
  ctaAction: () => void;
}

function CtaView({ ctaAction }: Props) {
  return (
    <div {...{ className: 'Cta' }}>
      <div {...{ className: 'Cta-button', onClick: ctaAction }}>
        <div {...{ className: 'Cta-text' }}>Bir adım atın</div>
      </div>
    </div>
  );
}

export default CtaView;
