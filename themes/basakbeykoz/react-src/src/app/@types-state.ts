import { 
    wpMenuItem, 
    SluggedTimestampedSingular,
} from '../wp/@types-wp'

export default interface stateMap {
    app: {
        isFetching: boolean,
        isDisplaying: {
            slug: string,
        },
    },
    menu: {
        items: wpMenuItem[]
    },
    singular: {
        post: {
            items: SluggedTimestampedSingular,
        },
        page: {
            items: SluggedTimestampedSingular,
        }
    }
}