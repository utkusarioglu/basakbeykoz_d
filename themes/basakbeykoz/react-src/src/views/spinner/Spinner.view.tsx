import React from 'react';
import config from '../../config';
import '../../styles/components/spinner/_spinner.view.scss';

const { UPLOADS_DIR } = config;

interface OwnProps {
  display: string;
  loadingMessage: string;
}

type Props = OwnProps;

function SpinnerView({ display, loadingMessage }: Props) {
  return (
    <div {...{ className: 'Spinner', style: { display } }}>
      <img
        {...{
          src: UPLOADS_DIR + '/logo-inline-black.svg',
          alt: 'Basak Beykoz',
          className: 'Spinner-logo',
        }}
      />
      <p {...{ className: 'Spinner-loadMessage' }}>{loadingMessage}</p>
    </div>
  );
}

export default SpinnerView;
