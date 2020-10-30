import React from 'react';
import NavFeature from '../../features/nav/Nav.feature';
import './_navHeader.layout.scss';

function NavHeaderLayout() {
  return (
    <div {...{ className: 'NavHeaderView' }}>
      <NavFeature />
    </div>
  );
}

export default NavHeaderLayout;
