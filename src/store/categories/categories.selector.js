import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  return state.categories;
};

//creates memo-ized selectors
//2 arguments: array of input selectors (what are the slices I want?) + output selector
//if the input selector changes, only then will the second argument method "run"
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);

//this is now memo-ized
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
