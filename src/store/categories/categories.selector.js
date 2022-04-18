import { createSelector } from "reselect";
const selectCategoryReducer = (state) => state.categories;

// returns an array of all of the categories
// initial value is from categories.reducer.js => categories = []
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// the below actually returns this:
// categoriesObject = { categoryTitle1: itemsFromCateg1, categoryTitle2: itemsFromCateg2, etc.. }
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, categoryObject) => {
      const { title, items } = categoryObject;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
