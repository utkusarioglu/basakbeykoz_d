import { DispatchMethod } from '../../common/@types-actions';
import { ACTION_TYPES, ACTION_STATES } from '../../common/actionConstants';
import { ERROR_CODES } from '../../store/@types-state';
import { wpMenuItem } from './@types-wordpress';
import rest from '../../services/rest';
export const fetchMenu = (slug: string) => (
  dispatch: DispatchMethod<wpMenuItem>
) => {
  rest
    .request({
      method: 'get',
      url: '/menus/v1/menus/' + slug,
    })
    .then(({ data }) => {
      if (data) {
        // TODO you need a better error test here
        dispatch({
          type: ACTION_TYPES.FETCH_MENU,
          state: ACTION_STATES.SUCCESS,
          payload: data.items,
        });
      } else {
        dispatch({
          type: ACTION_TYPES.FETCH_MENU,
          state: ACTION_STATES.FAIL,
          errorCode: ERROR_CODES.WP.MENU_FETCH_FAIL,
        });
      }
    });
};
