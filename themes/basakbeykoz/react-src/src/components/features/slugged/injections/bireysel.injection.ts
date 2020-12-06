import { useHistory } from 'react-router-dom';
import { RootState } from '../../../../store/rootReducer';
import { pageContentsHandler } from './pageContentsHandler';
import { UnmountFunction } from '../@types-slugged';

type Refs = RootState['app']['refs'];

/**
 * Injections that are applied to the page bireysel
 * @param refs refs object from store
 * @param history history object from {@link react-router-dom}
 */
export function bireyselInjection(
  refs: Refs,
  history: ReturnType<typeof useHistory>
): UnmountFunction {
  return pageContentsHandler(refs, history);
}
