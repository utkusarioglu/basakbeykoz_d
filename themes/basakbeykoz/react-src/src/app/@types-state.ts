import { 
    wpMenuItem, 
    wpPostItem, 
    wpPageItem,
} from '../wp/@types-wp'

export default interface stateMap {
    app: {
        isFetching: boolean,
        isDisplaying: {
            type: string,
            slug: string,
        },
    },
    menu: {
        items: wpMenuItem[]
    },
    pages: {
        list: any[], // TODO decide whether you really need this
        single: {
            [page_slug: string]: {
                loadTime: number,
                data: wpPageItem,
            }
        }
    },
    posts: {
        list: wpPostItem[], // TODO decide whether you really need this
        single: {
            [post_slug: string]: {
                loadTime: number,
                data: wpPostItem
            }
        }
    }
}
