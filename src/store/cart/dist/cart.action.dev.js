"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearItemFromCart = exports.removeItemFromCart = exports.addItemToCart = exports.setIsCartOpen = void 0;

var _cart = require("./cart.types");

var _reducer = require("../../utils/reducer/reducer.utils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addCartItem = function addCartItem(cartItems, productToAdd) {
  // find if cartitems contains productToAdd
  var existingCartItem = cartItems.find(function (cartItem) {
    return cartItem.id === productToAdd.id;
  }); // if found, icrement quantity

  if (existingCartItem) {
    return cartItems.map(function (cartItem) {
      return cartItem.id === productToAdd.id ? _objectSpread({}, cartItem, {
        quantity: cartItem.quantity + 1
      }) : cartItem;
    });
  } // return new array with modified cartItems/ new cart item


  return [].concat(_toConsumableArray(cartItems), [_objectSpread({}, productToAdd, {
    quantity: 1
  })]);
};

var removeCartItem = function removeCartItem(cartItems, cartItemToRemove) {
  // check the cart item to remove
  var existingCartItem = cartItems.find(function (cartItem) {
    return cartItem.id === cartItemToRemove.id;
  }); // check if quantity is equal to 1, if it is remove that item from the cart

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(function (cartItem) {
      return cartItem.id !== cartItemToRemove.id;
    });
  } // return back cartitems with matching cart item with reduced quantity


  return cartItems.map(function (cartItem) {
    return cartItem.id === cartItemToRemove.id ? _objectSpread({}, cartItem, {
      quantity: cartItem.quantity - 1
    }) : cartItem;
  });
};

var clearCartItem = function clearCartItem(cartItems, cartItemToClear) {
  return cartItems.filter(function (cartItem) {
    return cartItem.id !== cartItemToClear.id;
  });
};

var setIsCartOpen = function setIsCartOpen(_boolean) {
  return (0, _reducer.createAction)(_cart.CART_ACTION_TYPES.SET_IS_CART_OPEN, _boolean);
};

exports.setIsCartOpen = setIsCartOpen;

var addItemToCart = function addItemToCart(cartItems, productToAdd) {
  var newCartItems = addCartItem(cartItems, productToAdd);
  return (0, _reducer.createAction)(_cart.CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

exports.addItemToCart = addItemToCart;

var removeItemFromCart = function removeItemFromCart(cartItems, cartItemToRemove) {
  var newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return (0, _reducer.createAction)(_cart.CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

exports.removeItemFromCart = removeItemFromCart;

var clearItemFromCart = function clearItemFromCart(cartItems, cartItemToRemove) {
  var newCartItems = clearCartItem(cartItems, cartItemToRemove);
  return (0, _reducer.createAction)(_cart.CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

exports.clearItemFromCart = clearItemFromCart;
//# sourceMappingURL=cart.action.dev.js.map
