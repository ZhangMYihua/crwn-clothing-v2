import { createSelector } from "reselect";

const selectCategoryReducer = (state)=> state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=> categoriesSlice.categories,
);


export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);


export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories)=> categories.reduce(
        (acc,category)=>{
        const{title,items} = category;
        acc[title.toLowerCase()] = items;
        return acc
      },{})
  )
