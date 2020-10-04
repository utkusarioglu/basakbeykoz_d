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

export interface wpSingularItem extends wpSingularItemForDisplay {
  ID: number;
  author: number;
  date: string;
  excerpt: string;
  status: singularStatus;
  slug: string;
  comment_count: number;
  comment_status: commentStatus;
}

export interface wpSingularItemForDisplay {
  type: singularTypes;
  slug: string;
  title: string;
  thumbnail: string;
  content: string;
}

// this cannot be an interface. For some reason "type in" only works
// when this is a type instead of an interface
export type PartialSingularDispatch = Partial<SingularDispatch>;

export type SingularDispatch = {
  fetchTime: number;
} & {
  [type in singularTypes]: SluggedTimestampedSingular;
};

export interface TimestampedSingular {
  loadTime: number;
  data: wpSingularItem;
}

export interface SluggedTimestampedSingular {
  [slug: string]: TimestampedSingular;
}

export type singularTypes = "post" | "page";

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
