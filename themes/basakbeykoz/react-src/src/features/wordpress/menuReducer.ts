import { FSA } from '../../common/@types-actions';
import { wpMenuItem } from './@types-wordpress';
import { ACTION_TYPES, ACTION_STATES } from '../../common/actionConstants';
import { IMenu } from '../nav/@types-nav';

const initialState = {
  items: [],
};

export default function (
  state: IMenu = initialState,
  action: FSA<wpMenuItem[]>
): IMenu {
  switch (action.type) {
    case ACTION_TYPES.FETCH_MENU:
      if (action.state === ACTION_STATES.FAIL) return state;
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}
