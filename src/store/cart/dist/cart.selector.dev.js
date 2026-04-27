"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCartTotal = exports.selectCartCount = exports.selectIsCartOpen = exports.selectCartItems = void 0;

var _reselect = require("reselect");

var selectCartReducer = function selectCartReducer(state) {
  return state.cart;
};

var selectCartItems = (0, _reselect.createSelector)([selectCartReducer], function (cart) {
  return cart.cartItems;
});
exports.selectCartItems = selectCartItems;
var selectIsCartOpen = (0, _reselect.createSelector)([selectCartReducer], function (cart) {
  return cart.isCartOpen;
});
exports.selectIsCartOpen = selectIsCartOpen;
var selectCartCount = (0, _reselect.createSelector)([selectCartItems], function (cartItems) {
  return cartItems.reduce(function (total, cartItem) {
    return total + cartItem.quantity;
  }, 0);
});
exports.selectCartCount = selectCartCount;
var selectCartTotal = (0, _reselect.createSelector)([selectCartItems], function (cartItems) {
  return cartItems.reduce(function (total, cartItem) {
    return total + cartItem.quantity * cartItem.price;
  }, 0);
});
exports.selectCartTotal = selectCartTotal;
//# sourceMappingURL=cart.selector.dev.js.map
