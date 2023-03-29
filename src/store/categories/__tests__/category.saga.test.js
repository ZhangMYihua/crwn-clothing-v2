import { call } from 'typed-redux-saga/macro';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSaga,
} from '../category.saga';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from '../category.action';
import { CATEGORIES_ACTION_TYPES } from '../category.types';
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';

const mockCategoriesArray = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
];

describe('category sagas', () => {
  test('categoriesSaga', () => {
    testSaga(categoriesSaga)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });

  test('onFetchCategories should takeLatest FETCH_CATEGORIES_START and call fetchCategoriesAsync', () => {
    testSaga(onFetchCategories)
      .next()
      .takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
      )
      .next()
      .isDone();
  });

  test('fetchCategoriesAsync success', () => {
    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), mockCategoriesArray]])
      .put(fetchCategoriesSuccess(mockCategoriesArray))
      .run();
  });

  test('fetchCategoriesAsync failure', () => {
    const error = new Error('An error occurred');
    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), throwError(error)]])
      .put(fetchCategoriesFailed(error))
      .run();
  });
});
