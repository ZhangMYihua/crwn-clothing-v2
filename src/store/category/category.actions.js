import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { createAction } from "../../utils/reducer/reducer.util"
import CATEGORY_ACTION_TYPES from "./category.types"

export const setCategories = (categories) => {
    return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES,categories)
}

export const fetchCategoriesStart = () => {
    return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START)
}

export const fetchCategoriesSuccess = (categories) => {
    return createAction(
        CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categories
    );
}

export const fetchCategoriesFailed = (error) => {
    return createAction(
        CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
        error
    )
}

export const fetchCategoriesAsync = () =>{ 
    return async (dispatch) => {
        dispatch(fetchCategoriesStart())
        try {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(fetchCategoriesSuccess(categoriesArray));
        }
        catch (error){
            dispatch(fetchCategoriesFailed(error))
        }
    }
}