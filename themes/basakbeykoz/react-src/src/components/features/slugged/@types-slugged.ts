import { SluggedTimestampedSingular } from '../wordpress/@types-wordpress';

/**
 * The store shape of items from wp that are called by their slugs, such
 * as posts and pages
 */
export interface Slugged {
  post: {
    fetchTime: number;
    items: SluggedTimestampedSingular;
  };
  page: {
    items: SluggedTimestampedSingular;
  };
}

/**
 * Defines the type of function that is executed to unmount the side effects of
 * an injection
 *
 * @remarks
 * The injections that may be made to the wordpress rendered pages may contain
 * some event listeners and other items that may need to be removed. Unmount
 * functions that are returned from the injections do these. This type defines
 * their shape
 */
export type UnmountFunction = () => void;
