import React from 'react';
import './_ShareMenuButton.view.scss';
import { FiShare2 } from 'react-icons/fi';
import { OpenMenu } from '../../features/app/@types-app';

interface Props {
  setOpenMenuToggle: (openMenu: OpenMenu) => void;
}

function ShareMenuButtonView({ setOpenMenuToggle }: Props) {
  return (
    <div {...{ className: 'ShareMenu' }}>
      <button
        {...{
          onClick: () => setOpenMenuToggle('share'),
          className: 'ShareMenu-burgerButton',
        }}
      >
        <FiShare2 />
      </button>
    </div>
  );
}

export default ShareMenuButtonView;
