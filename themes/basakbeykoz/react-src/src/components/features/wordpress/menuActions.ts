import { DispatchMethod } from '../../../store/@types-actions';
import { ACTION_TYPES, ACTION_STATES } from '../../../store/actionConstants';
import { ERROR_CODES } from '../../../store/@types-store';
import { WpMenu, wpMenuItem } from './@types-wordpress';
import restApi from '../../../services/restApi';
export const fetchMenu = (slug: string) => (
  dispatch: DispatchMethod<wpMenuItem[]>
) => {
  restApi
    .request<WpMenu>({
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
          errorCode: ERROR_CODES.WORDPRESS.MENU_FETCH_FAIL,
        });
      }
    });
};
