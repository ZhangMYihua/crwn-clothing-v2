import CATEGORY_ACTION_TYPES from './category.types'

export const INITIAL_STATE = {
    categories: [],
}

export const categoryReducer = (state = INITIAL_STATE, action={}) => {
    const {type,payload} = action;
    switch(type) {
        case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
            return {
                ...state, categories: payload}
        default:
            return state;
    };
}