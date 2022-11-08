import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.saga";
import { categoriesSaga } from "./categories/categories.saga";

//generator function
export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
