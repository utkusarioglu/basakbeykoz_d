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
            id: number,
        },
    },
    menu: {
        items: wpMenuItem[]
    },
    pages: {
        list: any[], // TODO decide whether you really need this
        single: {
            [page_id: number]: {
                loadTime: number,
                data: wpPageItem,
            }
        }
    },
    posts: {
        list: wpPostItem[], // TODO decide whether you really need this
        single: {
            [post_id: number]: {
                loadTime: number,
                data: wpPostItem
            }
        }
    }
}
