"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = void 0;

var _redux = require("redux");

var _user = require("./user/user.reducer");

var _category = require("./categories/category.reducer");

var _cart = require("./cart/cart.reducer");

var rootReducer = (0, _redux.combineReducers)({
  user: _user.userReducer,
  categories: _category.categoriesReducer,
  cart: _cart.cartReducer
});
exports.rootReducer = rootReducer;
//# sourceMappingURL=root-reducer.dev.js.map
