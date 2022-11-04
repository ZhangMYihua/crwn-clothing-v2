import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () => {
  console.log("starting ");
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, {});
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  console.log("success");
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

export const fetchCategoriesFailed = (error) => {
  console.log("failure");
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};

//thunk action named async so we know it is async
export const fetchCategoriesStartAsync = () => {
  console.log("coming inside fetch categories async ");

  return async (dispatch) => {
    dispatch(fetchCategoriesStart());

    try {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      console.log("okay let us see the cat array", categoriesArray);
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      console.log(error, "thi is shte error");

      dispatch(fetchCategoriesFailed(error));
    }
  };
};
