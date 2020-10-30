import { IApp } from '../components/features/app/@types-app';
import { IMenu } from '../components/features/nav/@types-nav';
import { ISocial } from '../components/features/social/@types-social';
import { ISlugged } from '../components/features/slugged/@types-slugged';
import { WORDPRESS_ERROR_CODES } from '../components/features/wordpress/@types-wordpress';
import { APP_ERROR_CODES } from '../components/features/app/@types-app';

export default interface IRootReducer {
  app: IApp;
  menu: IMenu;
  social: ISocial;
  singular: ISlugged;
}

/*
Even though this is a class, it's here to nest enums from different
features because of this, it's in screaming snake case as enums are.

This project treats enums as constants and adops the naming convention 
for constants for enums.
*/
export class ERROR_CODES {
  static WORDPRESS = WORDPRESS_ERROR_CODES;
  static APP = APP_ERROR_CODES;
}
