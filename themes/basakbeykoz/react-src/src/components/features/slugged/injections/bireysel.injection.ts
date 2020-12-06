import { useHistory } from 'react-router-dom';
import { RootState } from '../../../../store/rootReducer';
import { pageContentsHandler } from './pageContentsHandler';

type Refs = RootState['app']['refs'];

/**
 * Injections that are applied to the page bireysel
 * @param refs refs object from store
 * @param history history object from {@link react-router-dom}
 */
export function bireyselInjection(
  refs: Refs,
  history: ReturnType<typeof useHistory>
) {
  // Method returns its own unmount function, which is not used yet
  pageContentsHandler(refs, history);
}
