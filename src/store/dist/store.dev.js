"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.store = void 0;

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _reduxThunk = require("redux-thunk");

var _rootReducer = require("./root-reducer");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var persistConfig = {
  key: 'root',
  storage: _storage["default"],
  blackList: ['cart']
};
var persistedReduer = (0, _reduxPersist.persistReducer)(persistConfig, _rootReducer.rootReducer);
var middleWares = [process.env.NODE_ENV !== 'production' && _reduxLogger["default"], _reduxThunk.thunk].filter(Boolean);
var composeEnhancer = process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || _redux.compose;
var composedEnhancers = composeEnhancer(_redux.applyMiddleware.apply(void 0, _toConsumableArray(middleWares)));
var store = (0, _redux.createStore)(persistedReduer, undefined, composedEnhancers);
exports.store = store;
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;
//# sourceMappingURL=store.dev.js.map
