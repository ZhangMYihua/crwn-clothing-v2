"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCategoriesIsLoading = exports.selectCategoriesMap = exports.selectCategories = void 0;

var _reselect = require("reselect");

var selectCategoryReducer = function selectCategoryReducer(state) {
  return state.categories;
};

var selectCategories = (0, _reselect.createSelector)([selectCategoryReducer], function (categoriesSlice) {
  return categoriesSlice.categories;
});
exports.selectCategories = selectCategories;
var selectCategoriesMap = (0, _reselect.createSelector)([selectCategories], function (categories) {
  return categories.reduce(function (acc, category) {
    var title = category.title,
        items = category.items;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
});
exports.selectCategoriesMap = selectCategoriesMap;
var selectCategoriesIsLoading = (0, _reselect.createSelector)([selectCategoryReducer], function (categoriesSlice) {
  return categoriesSlice.isLoading;
});
exports.selectCategoriesIsLoading = selectCategoriesIsLoading;
//# sourceMappingURL=category.selector.dev.js.map
