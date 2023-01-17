import CART_ACTION_TYPES from "./cart.types"

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE, action={}) => {
    const { type,payload } = action
    switch(type){
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {...state, isCartOpen: !state.isCartOpen}
        case CART_ACTION_TYPES.SET_CART_ITEM:
            return{
                ...state,
                cartItems: payload,
            } 
        default:
            return state;
    }
}