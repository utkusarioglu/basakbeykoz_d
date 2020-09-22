import { 
    wpMenuItem, 
    SluggedTimestampedSingular,
    wpSingularItemForDisplay,
} from '../features/wp/@types-wp'
import { ISocialItem } from '../features/social/@types-social';

export default interface stateMap {
    app: {
        isFetching: boolean,
        isMenuOpen: boolean,
        isDisplaying: {
            slug: string,
            loadTime: number,
            active: wpSingularItemForDisplay,
        },
    },
    menu: {
        items: wpMenuItem[]
    },
    social: {
        items: ISocialItem[]
    },
    singular: {
        post: {
            fetchTime: number,
            items: SluggedTimestampedSingular,
        },
        page: {
            items: SluggedTimestampedSingular,
        }
    }
}