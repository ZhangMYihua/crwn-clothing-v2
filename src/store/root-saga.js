import { all, call } from 'redux-saga/effects';

import { fetchCategorieSaga } from './categories/category.saga';

export function* rootSaga() {
  yield all([call(fetchCategorieSaga)]);
}
