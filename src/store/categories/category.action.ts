import { CATEGORIES_ACTION_TYPES, Category } from './category.types';

import {
  createAction,
  Action,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export const fetchCategoriesStart = withMatcher(() =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]) =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoriesFailed = withMatcher((error: Error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);
