import { DispatchMethod, FSA } from '../../common/@types-actions';
import { ACTION_TYPES, ACTION_STATES } from '../../common/actionConstants';
import {
  FETCH_STATES,
  PartialSingularDispatch,
  wpSingularArchiveItem,
} from './@types-wordpress';
import { filterByType } from './filters';
import rest from '../../services/rest';
import { ERROR_CODES } from './constants';
import { RootState } from '../../store/rootReducer';

export const boundFetchSingular = (slug: string) => (
  dispatch: DispatchMethod<PartialSingularDispatch>
) => {
  if (slug === '') {
    console.warn('empty slug');
  }
  return rest
    .request<wpSingularArchiveItem>({
      method: 'get',
      url: '/customrest/v1/singular_slug/' + slug,
    })
    .then(({ data }) => {
      if (data.state === FETCH_STATES.SUCCESS) {
        return {
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
        };
      } else {
        return {
          type: ACTION_TYPES.FETCH_SINGULAR,
          state: ACTION_STATES.FAIL,
          error: data.error,
          meta: {
            types: data.types,
            slug: data.slug,
            loadTime: Date.now(),
          },
        };
      }
    })
    .catch(() => {
      dispatch({
        type: ACTION_TYPES.FETCH_SINGULAR,
        state: ACTION_STATES.FAIL,
        error: ERROR_CODES.SINGULAR_FETCH_FAIL,
      });
    });
};

export function fetchCategoryPosts(
  slug: string
): Promise<FSA<PartialSingularDispatch>> {
  return rest
    .request<wpSingularArchiveItem[]>({
      method: 'get',
      url: '/customrest/v1/category_posts_slug/' + slug,
    })
    .then(({ data }) => {
      if (data) {
        const now = Date.now();
        return {
          type: ACTION_TYPES.FETCH_CATEGORY_POSTS,
          state: ACTION_STATES.SUCCESS,
          payload: {
            fetchTime: Date.now(),
            post: filterByType(data, 'post', now),
            page: filterByType(data, 'page', now),
          },
        };
      } else {
        return {
          type: ACTION_TYPES.FETCH_CATEGORY_POSTS,
          state: ACTION_STATES.FAIL,
          error: ERROR_CODES.CATEGORY_POSTS_FETCH_FAIL,
        };
      }
    });
  // !HACK
  // .catch(() => {
  //   return {
  //     type: ACTION_TYPES.FETCH_CATEGORY_POSTS,
  //     state: ACTION_STATES.FAIL,
  //     error: ERROR_CODES.CATEGORY_POSTS_FETCH_FAIL,
  //   };
  // });
}

export const selectPosts = (state: RootState) => state.singular.post;
