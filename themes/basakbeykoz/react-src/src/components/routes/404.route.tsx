import React from 'react';
import CanvasLayout from '../layout/canvas/Canvas.layout';

function FourOFourRoute() {
  return (
    <CanvasLayout
      {...{
        type: 'native',
        slug: '404',
        title: '404',
        thumbnail: '',
        content: 'f',
        articleComponent: <p>404</p>,
        onLoad: () => {},
      }}
    />
  );
}

export default FourOFourRoute;
