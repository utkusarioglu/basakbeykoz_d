import { 
    wpMenuItem, 
    SluggedTimestampedSingular,
    wpSingularItemForDisplay,
} from '../wp/@types-wp'

export default interface stateMap {
    app: {
        isFetching: boolean,
        isDisplaying: {
            slug: string,
            loadTime: number,
            active: wpSingularItemForDisplay,
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