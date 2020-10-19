import { DispatchMethod } from '../../common/@types-actions';
import { ACTION_TYPES, ACTION_STATES } from '../../common/actionConstants';
import {
  FETCH_STATES,
  PartialSingularDispatch,
  wpSingularArchiveItem,
} from './@types-wordpress';
import { filterByType } from './filters';
import rest from '../../services/rest';
import { WP_ERROR_CODES } from './constants';

export const fetchSingular = (slug: string) => (
  dispatch: DispatchMethod<PartialSingularDispatch>
) => {
  if (slug === '') {
    console.warn('empty slug');
  }
  rest
    .request<wpSingularArchiveItem>({
      method: 'get',
      url: '/customrest/v1/singular_slug/' + slug,
    })
    .then(({ data }) => {
      if (data.state === FETCH_STATES.SUCCESS) {
        dispatch({
          type: ACTION_TYPES.FETCH_SINGULAR,
          state: ACTION_STATES.SUCCESS,
          payload: {
            [data.type]: {
              [data.slug]: {
                loadTime: Date.now(),
                data: data,
              },
            },
          },
        });
      } else {
        dispatch({
          type: ACTION_TYPES.FETCH_SINGULAR,
          state: ACTION_STATES.FAIL,
          errorCode: data.error,
          meta: {
            types: data.types,
            slug: data.slug,
            loadTime: Date.now(),
          },
        });
      }
    })
    .catch(() => {
      dispatch({
        type: ACTION_TYPES.FETCH_SINGULAR,
        state: ACTION_STATES.FAIL,
        errorCode: WP_ERROR_CODES.SINGULAR_FETCH_FAIL,
      });
    });
};

export const fetchCategoryPosts = (slug: string) => (
  dispatch: DispatchMethod<PartialSingularDispatch>
) => {
  rest
    .request<wpSingularArchiveItem[]>({
      method: 'get',
      url: '/customrest/v1/category_posts_slug/' + slug,
    })
    .then(({ data }) => {
      if (data) {
        const fetchTime = Date.now();
        dispatch({
          type: ACTION_TYPES.FETCH_CATEGORY_POSTS,
          state: ACTION_STATES.SUCCESS,
          payload: {
            fetchTime,
            post: filterByType(data, 'post', fetchTime),
            page: filterByType(data, 'page', fetchTime),
          },
        });
      } else {
        dispatch({
          type: ACTION_TYPES.FETCH_CATEGORY_POSTS,
          state: ACTION_STATES.FAIL,
          errorCode: WP_ERROR_CODES.CATEGORY_POSTS_FETCH_FAIL,
        });
      }
    })
    .catch(() => {
      dispatch({
        type: ACTION_TYPES.FETCH_CATEGORY_POSTS,
        state: ACTION_STATES.FAIL,
        errorCode: WP_ERROR_CODES.CATEGORY_POSTS_FETCH_FAIL,
      });
    });
};
