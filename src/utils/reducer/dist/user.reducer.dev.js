"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.USER_ACTION_TYPES = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};
exports.USER_ACTION_TYPES = USER_ACTION_TYPES;
var INITIAL_STATE = {
  currentUser: null
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return _objectSpread({}, state, {
        currentUser: payload
      });

    default:
      return state;
  }
};

var _default = userReducer;
exports["default"] = _default;
//# sourceMappingURL=user.reducer.dev.js.map
