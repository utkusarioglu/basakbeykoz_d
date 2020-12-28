import React from 'react';
import './_burgerMenuButton.view.scss';
import { TiThMenu } from 'react-icons/ti';
import { OpenMenu } from '../../features/app/@types-app';

interface Props {
  setOpenMenuToggle: (openMenu: OpenMenu) => void;
}

function BurgerMenuButtonView({ setOpenMenuToggle }: Props) {
  return (
    <div {...{ className: 'BurgerMenu' }}>
      <button
        {...{
          onClick: () => setOpenMenuToggle('nav'),
          className: 'BurgerMenu-burgerButton',
        }}
      >
        <TiThMenu />
      </button>
    </div>
  );
}

export default BurgerMenuButtonView;
