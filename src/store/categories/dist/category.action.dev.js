"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCategoriesAsync = exports.fetchCategoriesFailed = exports.fetchCategoriesSuccess = exports.fetchCategoriesStart = void 0;

var _firebase = require("../../utils/firebase/firebase.utils");

var _reducer = require("../../utils/reducer/reducer.utils");

var _category = require("./category.types");

var fetchCategoriesStart = function fetchCategoriesStart() {
  return (0, _reducer.createAction)(_category.CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

exports.fetchCategoriesStart = fetchCategoriesStart;

var fetchCategoriesSuccess = function fetchCategoriesSuccess(categoriesArray) {
  return (0, _reducer.createAction)(_category.CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
};

exports.fetchCategoriesSuccess = fetchCategoriesSuccess;

var fetchCategoriesFailed = function fetchCategoriesFailed(error) {
  return (0, _reducer.createAction)(_category.CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};

exports.fetchCategoriesFailed = fetchCategoriesFailed;

var fetchCategoriesAsync = function fetchCategoriesAsync() {
  return function _callee(dispatch) {
    var categoriesArray;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(fetchCategoriesStart());
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _firebase.getCategoriesAndDocuments)('categories'));

          case 4:
            categoriesArray = _context.sent;
            dispatch(fetchCategoriesSuccess(categoriesArray));
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            dispatch(fetchCategoriesFailed(_context.t0));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.fetchCategoriesAsync = fetchCategoriesAsync;
//# sourceMappingURL=category.action.dev.js.map
