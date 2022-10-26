import { all, call, takeLatest, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { fetchCategoriesSuccess, fetchCategoriesFailed} from './category-action';
import { CATEGORIES_ACTION_TYPES } from './category-types';




export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
         yield put(fetchCategoriesFailed(error));
        }
}  

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}  

  export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
  }