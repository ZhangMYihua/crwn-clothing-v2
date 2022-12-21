import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess } from "./categories.action";
import { fetchCategoriesFailed } from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

// //thunk action named async so we know it is async
// export const fetchCategoriesStartAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());

//     try {
//       const categoriesArray = await getCategoriesAndDocuments("categories");
//       console.log("okay let us see the cat array", categoriesArray);
//       dispatch(fetchCategoriesSuccess(categoriesArray));
//     } catch (error) {
//       console.log(error, "thi is shte error");

//       dispatch(fetchCategoriesFailed(error));
//     }
//   };
// };

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    //put = generator version of dispatch
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    //put = generator version of dispatch
    yield put(fetchCategoriesFailed(error));
  }
}

//generators respond to actions
export function* onFetchCategories() {
  //spawn a new saga, if one already exists and it is running, kill it
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

//accumulator that holds all sagas related to the category
//generator function
export function* categoriesSaga() {
  //effect - run everything inside and only complete when all of this is done.
  yield all([call(onFetchCategories)]);
}
