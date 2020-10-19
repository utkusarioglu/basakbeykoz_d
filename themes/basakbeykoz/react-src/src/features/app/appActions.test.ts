import * as actions from './appActions';
import { ACTION_TYPES, ACTION_STATES } from '../../common/actionConstants';
import { FSA } from '../../common/@types-actions';
import stateMap from '../../store/@types-state';

describe('AppActions', () => {
  it('isFetching success', () => {
    const expectedAction: FSA<stateMap['app']['isFetching']> = {
      type: ACTION_TYPES.IS_FETCHING,
      state: ACTION_STATES.SUCCESS,
      payload: true,
    };
    expect(actions.setFetching(true)).toEqual(expectedAction);
  });
});
