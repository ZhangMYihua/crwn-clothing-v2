"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loggerMiddleware = void 0;

var loggerMiddleware = function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      if (!action.type) {
        return next(action);
      }

      console.log('type', action.type);
      console.log('payload', action.payload);
      console.log('current state', store.getState());
      next(action);
      console.log('next state', store.getState());
    };
  };
};

exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=logger.dev.js.map
