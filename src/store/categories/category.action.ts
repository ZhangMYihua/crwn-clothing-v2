import {
    CATEGORIES_ACTION_TYPES,
    Category,
} from "./category.types";

import {
    createAction,
    Action,
    ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

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

export const fetchCategoriesStart = (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (
    categoriesArray: Category[]
): FetchCategoriesSuccess =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
    );

export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
