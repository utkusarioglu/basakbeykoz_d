import React from 'react';
import './_burgerMenuButton.view.scss';
import { TiThMenu } from 'react-icons/ti';

interface Props {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isMenuOpen: boolean;
}

function BurgerMenuButtonView({ isMenuOpen, setIsMenuOpen }: Props) {
  return (
    <div {...{ className: 'BurgerMenu' }}>
      <button
        {...{
          onClick: () => setIsMenuOpen(!isMenuOpen),
          className: 'BurgerMenu-burgerButton',
        }}
      >
        <TiThMenu />
      </button>
    </div>
  );
}

export default BurgerMenuButtonView;
