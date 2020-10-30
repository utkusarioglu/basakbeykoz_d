import React from 'react';
import config from '../../../config';
import './_burgerMenuButton.view.scss';

const { UPLOADS_DIR } = config;

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
        <img {...{ alt: 'Menu', src: UPLOADS_DIR + '/burger-menu.svg' }} />
      </button>
    </div>
  );
}

export default BurgerMenuButtonView;
