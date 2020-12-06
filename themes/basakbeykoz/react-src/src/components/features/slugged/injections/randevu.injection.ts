import { useHistory } from 'react-router-dom';
import { RootState } from '../../../../store/rootReducer';
import { pageContentsHandler } from './pageContentsHandler';

type Refs = RootState['app']['refs'];

/**
 * The injections for page with the slug randevu
 * @param refs - refs object from the store
 * @param history - history object from {@link react-router-dom}
 */
export function randevuInjection(
  refs: Refs,
  history: ReturnType<typeof useHistory>
) {
  return pageContentsHandler(refs, history);
}
