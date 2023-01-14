import USER_ACTION_TYPES from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}

// useeReducer way of handling useState
export const userReducer = (state = INITIAL_STATE, action) => {
    /* state is useful to when you what to keep track of incrementing 
    something or need to use it for someother reason or if you want to
    keep previous values in state using ...state
    */
    const {type,payload} = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, currentUser: payload}
        default:
            return state;
    }
}