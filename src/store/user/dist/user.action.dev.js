"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrentUser = void 0;

var _reducer = require("../../utils/reducer/reducer.utils");

var _user = require("./user.types");

var setCurrentUser = function setCurrentUser(user) {
  return (0, _reducer.createAction)((0, _reducer.createAction)(_user.USER_ACTION_TYPES.SET_CURRENT_USER, user));
};

exports.setCurrentUser = setCurrentUser;
//# sourceMappingURL=user.action.dev.js.map
