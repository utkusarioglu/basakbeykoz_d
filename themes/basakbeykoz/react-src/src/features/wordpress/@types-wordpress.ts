import { ERROR_CODES } from "./constants";

export interface wpMenuItem {
  ID: number;
  title: string;
  slug: string;
  url: string;
  object: string; // type of the link object ex: page, post
}

export interface wpPostItem extends wpSingularCommon {
  type: "post";
}

export interface wpPageItem extends wpSingularCommon {
  type: "page";
}

interface wpSingularCommon {
  id: number;
  title: string;
  slug: string;
  content: string;
  link: string;
}

export enum FETCH_STATES {
  SUCCESS = "success",
  FAIL = "fail",
}

export type wpSingularArchiveItem = wpSingularItemSuccess | wpSingularItemFail;

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
  code: ERROR_CODES;
  types: WpSingularTypes[];
  slug: string;
}

interface SingularItemForView {
  slug: string;
  title: string;
  thumbnail: string;
  content: string;
}

export interface wpSingularItemForView extends SingularItemForView {
  type: WpSingularTypes;
}

export interface NativeSingularItemForView extends SingularItemForView {
  type: "native";
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
  // data: wpSingularItem | wpSingularItemFail;
  data: wpSingularArchiveItem;
}

export interface SluggedTimestampedSingular {
  [slug: string]: TimestampedSingular;
}

export type WpSingularTypes = "post" | "page";

type singularStatus =
  | "Publish"
  | "Future"
  | "Draft"
  | "Pending"
  | "Private"
  | "Trash"
  | "Auto-Draft"
  | "Inherit";

type commentStatus = "trash" | "approved" | "unapproved" | "spam";
