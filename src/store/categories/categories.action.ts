import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher
} from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { Category } from "./categories.types";

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

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
  //generate actions and also typecheck actions
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, {});
});

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess => {
    return createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    );
  }
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
  }
);
