import { 
    wpMenuItem, 
    SluggedTimestampedSingular,
    wpSingularItemForDisplay,
} from '../features/wordpress/@types-wp'
import { ISocialItem } from '../features/social/@types-social';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export default interface stateMap {
    app: {
        isFetching: boolean,
        isMenuOpen: boolean,
        isDisplaying: {
            slug: string,
            loadTime: number,
            active: wpSingularItemForDisplay,
        },
        refs: {
            body?: React.RefObject<OverlayScrollbarsComponent>,
            latestPosts?: React.RefObject<OverlayScrollbarsComponent>,
            testimonials?: React.RefObject<OverlayScrollbarsComponent>,
        }
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