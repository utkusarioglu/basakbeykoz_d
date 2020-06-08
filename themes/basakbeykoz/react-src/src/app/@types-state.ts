import { 
    wpMenuItem, 
    wpSingularItem,
} from '../wp/@types-wp'

export default interface stateMap {
    app: {
        isFetching: boolean,
        isDisplaying: {
            // type: string,
            slug: string,
        },
    },
    menu: {
        items: wpMenuItem[]
    },
    singular: {
        postList: any[], // TODO decide whether you really need this
        pageList: any[], // TODO decide whether you really need this
        archive: {
            [slug: string]: {
                loadTime: number,
                data: wpSingularItem,
            }
        }
    },
}
