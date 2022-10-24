import {all , call}  from 'redux-saga/effects'
import { categorySaga } from './categories/category-saga'
import { userSagas } from './user/user.saga'



export function* rootSaga(){
    yield all([call(categorySaga), call(userSagas)])
};
