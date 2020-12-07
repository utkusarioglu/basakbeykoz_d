export interface wpMenuItem {
  ID: number;
  title: string;
  slug: string;
  url: string;
  object: string; // type of the link object ex: page, post
}

export interface wpPostItem extends wpSingularCommon {
  type: 'post';
}

export interface wpPageItem extends wpSingularCommon {
  type: 'page';
}

interface wpSingularCommon {
  id: number;
  title: string;
  slug: string;
  content: string;
  link: string;
}

export type wpSingularArchiveItem = wpSingularItemSuccess | wpSingularItemFail;

export enum FETCH_STATES {
  SUCCESS = 'success',
  FAIL = 'fail',
}

export interface wpSingularItemSuccess extends wpSingularItemForView {
  state: FETCH_STATES.SUCCESS;
  ID: number;
  author: number;
  date: string;
  excerpt: string;
  status: singularStatus;
  slug: string;
  comment_count: number;
  comment_status: commentStatus;
}

export interface wpSingularItemFail {
  state: FETCH_STATES.FAIL;
  error: WORDPRESS_ERROR_CODES;
  types: WpSingularTypes[];
  slug: string;
}

interface SingularItemForView {
  slug: string;
  title: string;
  thumbnail: string;
  content: string;
  excerpt: string;
}

export interface wpSingularItemForView extends SingularItemForView {
  type: WpSingularTypes;
}

export interface NativeSingularItemForView extends SingularItemForView {
  type: NativeTypes;
}

export type GeneralSingularItemforView =
  | NativeSingularItemForView
  | wpSingularItemForView;

// this cannot be an interface. For some reason "type in" only works
// when this is a type instead of an interface
export type PartialSingularDispatch = Partial<SingularDispatch>;

export type SingularDispatch = {
  fetchTime: number;
} & {
  [type in WpSingularTypes]: SluggedTimestampedSingular;
};

export interface TimestampedSingular {
  loadTime: number;
  data: wpSingularArchiveItem;
}

export interface SluggedTimestampedSingular {
  [slug: string]: TimestampedSingular;
}
export type DisplayTypes = WpSingularTypes | NativeTypes;
export type NativeTypes = 'native';
export type WpSingularTypes = 'post' | 'page';

type singularStatus =
  | 'Publish'
  | 'Future'
  | 'Draft'
  | 'Pending'
  | 'Private'
  | 'Trash'
  | 'Auto-Draft'
  | 'Inherit';

type commentStatus = 'trash' | 'approved' | 'unapproved' | 'spam';

// !HACK babel does not support const enums, hence this here uses "let"
export enum WORDPRESS_ERROR_CODES {
  NO_MATCH_SINGULAR = 'WORDPRESS/NO_MATCH_SINGULAR',
  MULTIPLE_MATCHES_SINGULAR = 'WORDPRESS/MULTIPLE_MATCHES_SINGULAR',
  MENU_FETCH_FAIL = 'WORDPRESS/MENU_FETCH_FAIL',
  SINGULAR_FETCH_FAIL = 'WORDPRESS/SINGULAR_FETCH_FAIL',
  CATEGORY_POSTS_FETCH_FAIL = 'WORDPRESS/CATEGORY_POSTS_FETCH_FAIL',
}

export interface WpMenu {
  items: wpMenuItem[];
}
