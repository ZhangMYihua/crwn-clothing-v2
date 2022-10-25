import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

// this function increases the quantity of the item in the cart by one
const addCartItem = (cartItems, productToAdd) => {
  const itemExists = cartItems.find(item => item.id === productToAdd.id)
  if (itemExists) {
    const updatedItems = cartItems.map(item => item.id === productToAdd.id 
      ? {...item, quantity: item.quantity + 1} 
      : item)
    return updatedItems;
  } else {
    return [...cartItems, {...productToAdd, quantity: 1}]
  }
}

// this function decreases the quantity of the item in the cart by one. If the quantity of an item is 1, the item will be filtered out of cartItems
const subtractCartItem = (cartItems, cartItemToSubtract) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToSubtract.id)
  if (existingCartItem.quantity === 1) {
    const updatedItems = cartItems.filter(item => item.id !== cartItemToSubtract.id)
    return updatedItems;
  } else {
    const updatedItems = cartItems.map(item => item.id === cartItemToSubtract.id 
      ? {...item, quantity: item.quantity - 1} 
      : item)
    return updatedItems;
  }
}

// this function removes the item from the cart
const removeCartItem = (cartItems, cartItemToRemove) => {
  const updatedItems = cartItems.filter(item => item.id !== cartItemToRemove.id)
  return updatedItems;
}

// creating the Context object
export const CartContext = createContext(
  {
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    subtractItemFromCart: () => {},
    cartTotal: 0
  }
)

// declare initial state for reducer's use
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

// ACTIONS FOR CART REDUCER - reduces human error
export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_CART_IS_OPEN: "TOGGLE_CART_IS_OPEN"
}

const cartReducer = (state, action) => {
  const {type, payload} = action;
  switch(type) {
    // reducer should not handle any business logic. It should only care about updating state and not how to update that state.
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      };
    case CART_ACTION_TYPES.TOGGLE_CART_IS_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    default: 
    throw new Error(`Unhandled type of ${type} in cartReducer.`)
  }
}

// creating the Context component 
export const CartProvider = ({children}) => {
const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
const {isCartOpen, cartCount, cartTotal, cartItems} = state;

// defining setIsCartOpen function since no longer given by useState
  const setIsCartOpen = (isCartOpen) => {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART_IS_OPEN, isCartOpen))
    // dispatch({ 
    //   type: CART_ACTION_TYPES.TOGGLE_CART_IS_OPEN,
    //   payload: isCartOpen
    // })
  }

  // USE REDUCERS WHEN ONE UPDATE MODIFIES MULTIPLE PIECES OF STATE
  // REPLACING USESTATE AND USEEFFECTS WITH CARTREDUCER
  // const [isCartOpen, setIsCartOpen] = useState(false)
  // const [cartItems, setCartItems] = useState([])
  // const [cartCount, setCartCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0)

  // // this effect will run when cartItems changes. The cartCount will change based on the items in the cart(cartItems)
  // useEffect(() => {
  //   const newCartCount = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity, 0);
  //   setCartCount(newCartCount);
  // }, [cartItems])

  // // this effect will run when cartItems changes. The cartTotal will change based on the number of items in the cart (cartItems) and each item's price
  // useEffect(() => {
  //   const newCartTotal = cartItems.reduce(
  //     (total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
  //   setCartTotal(newCartTotal)
  // }, [cartItems])

  const updateCartItemsReducer = (newCartItems) => {
    
    // generate newCartTotal
     const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
    //  generate newCartCount
     const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity, 0);

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartTotal: newCartTotal,
      cartCount: newCartCount, 
      cartItems: newCartItems
    }))
    //  dispatch new action with payload = {
    //  newCartItems, newCartTotal, newCartCount}
    // dispatch({
    //   type: CART_ACTION_TYPES.SET_CART_ITEMS,
    //   payload: {
    //     cartTotal: newCartTotal,
    //     cartCount: newCartCount, 
    //     cartItems: newCartItems
    //   }
    // })
    
     
  }

  // this function will increase the quantity of an item already in cart. Invokes addCartItem defined above
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }
  
  // this function will decrease the quantity of an item already in cart. Invokes subtractCartItem defined above
  const subtractItemFromCart = (cartItemToSubtract) => {
    const newCartItems = subtractCartItem(cartItems, cartItemToSubtract)
    updateCartItemsReducer(newCartItems)
  }

  // this function will removes an item from the cart. Invokes removeCartItem defined above
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }

  // creating a value object with properties and methods to be accessed by other components throughout the app
  const value={ 
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    subtractItemFromCart, 
    removeItemFromCart, 
    cartItems, 
    cartCount, 
    cartTotal }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

/**
 * Context API vs Redux
 * -------Accessibility---------
 * With Context, we can give access to the entire app or only to certain parts of the app that require access to the data in a certain context. For example, we can wrap the Shop component with the CategoriesProvider since only that part of the app needs access to it instead of wrapping the entire app with CategoriesProvider as it is now.
 * 
 * With Redux, the store store wraps around the entire app like we currently have our context architecture to give access to all the app components. Redux is a GLOBAL state management library.
 * 
 * ---------Flow of Data---------
 * Context & Reducers
 * The components trigger actions (setCurrentUser, setIsCartOpen) for the reducers, through dispatches, then the reducers updated their corresponding state, which is consumed by those components, which are then rerendered with updated state. 
 * 
 * Redux Store
 * All reducers combine into a root reducer (one giant reducer). From this reducer, the entire state object is passed into various UI components. These components have access to one dispatch function, and all those reducers get updated by the dispatch action. We have to determine which pieces of state to update in each reducer. 
 * 
 * There is a single source of truth. Single store, single dispatch. Whereas Context & Reducers allow for state to be spread out over various contexts, Redux has all the state in one place. 
 * 
 */