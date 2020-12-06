import { RootState } from '../../../store/rootReducer';
import { useHistory } from 'react-router-dom';
import {
  WpSingularTypes,
  TimestampedSingular,
} from '../wordpress/@types-wordpress';
import { homeInjection } from './injections/home.injection';
import config from '../../../config';
import { contactPageInjection } from './injections/contact.injection';
import { bireyselInjection } from './injections/bireysel.injection';

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

export function runSlugOnload(
  slug: string,
  refs: RootState['app']['refs'],
  history: ReturnType<typeof useHistory>
): () => void {
  switch (slug) {
    case HOME_SLUG:
      return () => process.nextTick(() => homeInjection(refs, history));

    case 'iletisim':
      return () => process.nextTick(() => contactPageInjection(refs));

    case 'ilkeler':
      return () => process.nextTick(() => bireyselInjection(refs, history));

    default:
      return () => null;
  }
}
