export interface wpMenuItem {
    ID: number,
    title: string,
    slug: string,
    url: string,
}

export interface wpPostItem extends wpPagePostCommon {
    type: "post",
}

export interface wpPageItem extends wpPagePostCommon{
    type: "page",
}

interface wpPagePostCommon {
    id: number,
    title: {
        rendered: string,
    },
    slug: string,
    content: {
        rendered: string,
    },
    link: string,
}
