import { IApp } from '../features/app/@types-app';
import { IMenu } from '../features/nav/@types-nav';
import { ISocial } from '../features/social/@types-social';
import { ISlugged } from '../features/slugged/@types-slugged';

export default interface IRootReducer {
  app: IApp;
  menu: IMenu;
  social: ISocial;
  singular: ISlugged;
}
