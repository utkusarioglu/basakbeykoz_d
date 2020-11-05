import { RootState } from '../../../store/rootReducer';
import {
  WpSingularTypes,
  TimestampedSingular,
} from '../wordpress/@types-wordpress';
import { homeInjection } from './injections/home.injection';
import config from '../../../config';

const { HOME_SLUG } = config;

export function findBySlug(
  singular: RootState['singular'],
  slug: string
): TimestampedSingular | undefined {
  return Object.values(singular)
    .map((archive: RootState['singular'][WpSingularTypes]) => {
      return archive.items[slug];
    })
    .filter((singular: TimestampedSingular | undefined) => {
      return singular !== undefined;
    })[0];
}

export function getSlugOnload(
  slug: string,
  refs: RootState['app']['refs']
): () => void {
  switch (slug) {
    case HOME_SLUG:
      return () => process.nextTick(() => homeInjection(refs));

    default:
      return () => null;
  }
}
