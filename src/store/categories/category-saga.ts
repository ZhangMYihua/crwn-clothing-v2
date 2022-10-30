import { all, call, takeLatest, put } from 'typed-redux-saga/macro';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { fetchCategoriesSuccess, fetchCategoriesFailed} from './category-action';
import { CATEGORIES_ACTION_TYPES } from './category-types';




export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield* call(getCategoriesAndDocuments);
        yield* put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
         yield* put(fetchCategoriesFailed(error as Error));
        }   
}  

export function* onFetchCategories() {
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}  

  export function* categoriesSaga() {
    yield* all([call(onFetchCategories)]);
  }