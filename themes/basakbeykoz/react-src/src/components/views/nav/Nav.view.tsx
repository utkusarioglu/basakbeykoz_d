import React from 'react';
import { wpMenuItem } from '../../features/wordpress/@types-wordpress';
import NavItemView from './NavItem.view';

interface Props {
  items: wpMenuItem[];
  clickSetDisplaying: (slug: string) => void;
}

function NavView({ items, clickSetDisplaying }: Props) {
  return (
    <nav>
      {items &&
        items.map((item: wpMenuItem) => (
          <NavItemView
            {...{
              key: item.ID,
              ID: item.ID,
              title: item.title,
              slug: item.slug,
              clickSetDisplaying,
            }}
          />
        ))}
    </nav>
  );
}

export default NavView;
