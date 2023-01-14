import { createAction } from "../../utils/reducer/reducer.util"
import CATEGORY_ACTION_TYPES from "./category.types"

export const setCategoryMap = (categories) => {
    return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP,categories)
}