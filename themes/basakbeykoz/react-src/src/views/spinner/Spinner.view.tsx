import React from 'react';
import { Env } from '../../common/@types-common';
import './_spinner.view.scss';

interface OwnProps {
  display: string;
  loadingMessage: string;
}

type Props = OwnProps;

function SpinnerView(props: Props) {
  const { REACT_APP_UPLOADS_DIR } = process.env as Env;
  const { display, loadingMessage } = props;

  return (
    <div {...{ className: 'Spinner', style: { display } }}>
      <img
        {...{
          src: REACT_APP_UPLOADS_DIR + '/logo-inline-black.svg',
          alt: 'Basak Beykoz',
          className: 'Spinner-logo',
        }}
      />
      <p {...{ className: 'Spinner-loadMessage' }}>{loadingMessage}</p>
    </div>
  );
}

export default SpinnerView;
