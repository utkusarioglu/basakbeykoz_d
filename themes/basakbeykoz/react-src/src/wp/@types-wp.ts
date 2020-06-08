export interface wpMenuItem {
    ID: number,
    title: string,
    slug: string,
    url: string,
    object: string, // type of the link object ex: page, post
}

export interface wpPostItem extends wpSingularCommon {
    type: "post",
}

export interface wpPageItem extends wpSingularCommon{
    type: "page",
}

interface wpSingularCommon {
    id: number,
    title: string,
    slug: string,
    content: string
    link: string,
}

export interface wpSingularItem {
    title: string,
    ID: number,
    content: string,
    type: "post" | "page",
    author: number,
    date: string,
    excerpt: string,
    status: singularStatus,
    slug: string,
    comment_count: number,
    comment_status: commentStatus,
}

type singularStatus = "Publish" 
    | "Future" 
    | "Draft" 
    | "Pending" 
    | "Private" 
    | "Trash"
    | "Auto-Draft"
    | "Inherit"

type commentStatus = "trash" 
    | "approved" 
    | "unapproved" 
    | "spam"