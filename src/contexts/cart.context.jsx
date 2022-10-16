import { createContext,useReducer} from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const addCartItem = (itemToAdd,cartItems) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const SET_ACTION_TYPES ={
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  IS_CART_OPEN : 'IS_CART_OPEN',
}



export const CartContext = createContext({

  isCartOpen: false,
  setIsCartOpen:()=>{},
  cartItems:[],

  addItemToCart: ()=>{},
  itemsCount: 0,
  totalPrice: 0,
  removeItemFromCheckout: ()=>{},
  decQuantity: ()=>{},

});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems:[],
  itemsCount: 0,
  totalPrice: 0,
}

const cartReducer = (state,action) => {
  const{type,payload} = action;

  switch (type){
    case SET_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }
    case SET_ACTION_TYPES.IS_CART_OPEN:
      return{
        ...state,
        isCartOpen: payload,
      }

    default:
      throw new Error(`un handled type of ${type}`);
  };
};



export const CartProvider =({children}) =>{




const [{cartItems,itemsCount,totalPrice,isCartOpen},dispatch]= useReducer(cartReducer,INITIAL_STATE)

const updateCartItemsReducer = (newCartItems) =>{
  const newTotal = newCartItems.reduce((total,item)=> total + (item.price * item.quantity) ,0);
  const newCount = newCartItems.reduce((total,item)=> total + item.quantity,0);

  dispatch(createAction(SET_ACTION_TYPES.SET_CART_ITEMS,{cartItems:newCartItems, itemsCount: newCount, totalPrice: newTotal,}));
};

const setIsCartOpen = (Bool)=>{
  dispatch(createAction(SET_ACTION_TYPES.IS_CART_OPEN ,Bool)); 

}   

const deleteItem =(currentItem,cartItems)=>{
 return cartItems.filter(item => item.id !== currentItem.id)  
 
  
};
const decItemQuantity =(currentItem,cartItems)=>{
  if (currentItem.quantity <= 1) return cartItems.filter(item => item.id !== currentItem.id);
    else{
      return cartItems.map(item => {
        if (item.id ===currentItem.id) return {...currentItem,quantity: currentItem.quantity-1};
          else return item; 
      })
      
      };
  
}; 

const removeItemFromCheckout = (currentItem)=>{
  const NewCartItems = deleteItem(currentItem,cartItems)
  updateCartItemsReducer(NewCartItems)
  
}

const decQuantity = (currentItem)=>{
  const NewCartItems = decItemQuantity(currentItem,cartItems)
  updateCartItemsReducer(NewCartItems)
}

const addItemToCart = (itemToAdd) =>{
  
  const NewCartItems = addCartItem(itemToAdd,cartItems)
  updateCartItemsReducer(NewCartItems)
}



const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,itemsCount,totalPrice,removeItemFromCheckout,decQuantity};

return <CartContext.Provider value= {value}>{children}</CartContext.Provider>
}
