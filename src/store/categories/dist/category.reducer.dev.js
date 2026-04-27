"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoriesReducer = void 0;

var _category = require("./category.types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null
};

var categoriesReducer = function categoriesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CATEGORIES_INITIAL_STATE;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _category.CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _category.CATEGORIES_ACTION_TYPES.FETCH_CATTEGORIES_SUCCESS:
      return _objectSpread({}, state, {
        categories: payload,
        isLoading: false
      });

    case _category.CATEGORIES_ACTION_TYPES.FETCH_CATTEGORIES_FAILED:
      return _objectSpread({}, state, {
        error: payload,
        isLoading: false
      });

    default:
      return state;
  }
};

exports.categoriesReducer = categoriesReducer;
//# sourceMappingURL=category.reducer.dev.js.map
