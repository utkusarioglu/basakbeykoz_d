import React from 'react';
import { NavLink } from 'react-router-dom';
import config from '../../../config';

const { HOME_SLUG } = config;

interface Props {
  ID: number;
  slug?: string;
  title: string;
  clickSetDisplaying: (slug: string) => void;
}

function NavItemView({ ID, slug, clickSetDisplaying, title }: Props) {
  const linkSlug = !!slug ? slug : '';
  const clickSlug = linkSlug || (HOME_SLUG as string);

  return (
    <NavLink
      {...{
        key: ID,
        exact: true,
        to: `/${linkSlug}`,
        className: 'Nav-item',
        activeClassName: 'Nav-item-active',
        onClick: () => clickSetDisplaying(clickSlug),
      }}
    >
      {title}
    </NavLink>
  );
}

export default NavItemView;
