import { all,call } from 'redux-saga/effects'

import { categoriesSaga } from './category/category.saga'

export function* rootSaga() {
    yield all[call(categoriesSaga)]
}