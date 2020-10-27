import React from 'react';
import NavFeature from '../../features/nav/Nav.feature';
import '../../styles/components/nav/_navHeader.view.scss';

function NavView() {
  return (
    <div {...{ className: 'NavHeaderView' }}>
      <NavFeature />
    </div>
  );
}

export default NavView;
