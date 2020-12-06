/**
 * The list of social items, most probably retrieved from window.config object
 */
export type SocialItemList = SocialItem[];

/**
 * Defines the properties of a single social item. These items become the
 * social media icons on the menu and in the contact page
 */
export interface SocialItem {
  title: string;
  link: string;
  icon: string;
}
