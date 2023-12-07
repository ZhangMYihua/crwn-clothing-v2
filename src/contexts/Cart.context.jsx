import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

const AddAndIncQuantity=(cartItems,product)=>{
    const existingItem = cartItems.find(item => item.id === product.id);

  if (existingItem) {
    // If the item already exists in the cart, create a new object with updated quantity
    return cartItems.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    // If the item is not in the cart, add it with quantity 1
    return [...cartItems, { ...product,quantity:1}]
}}

const decItem=(cartItems,product)=>{
  const updatedCartItems = cartItems.map(item =>
    item.id === product.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  ).filter(item => item.quantity > 0);
  return updatedCartItems
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems:null,
  AddItemToCart:()=>{},
  cartCount:0,
  CartItemReduce:()=>{},
  totalAmt:0,
  removeItem:()=>{}
});
export const Cart_ACTION_TYPES={
  ADD_ITEM_TO_CART:"ADD_ITEM_TO_CART",
  SET_IS_CART_OPEN:"SET_IS_CART_OPEN"

}
const cartReducer=(state,action)=>{
  const {type,payload}=action;
  switch(type){
    case Cart_ACTION_TYPES.ADD_ITEM_TO_CART:
      return{
        ...state,
        ...payload,
      };
    case Cart_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen:payload
      }
    default:
      throw new Error("wrong type")

  }
}
const INITIAL_STATE={
  cartItems:[],
  cartCount:0,
  totalAmt:0,
  isCartOpen:false
}

export const CartProvider = ({ children }) => {
  const [{cartItems,cartCount,totalAmt,isCartOpen},dispatch]=useReducer(cartReducer,INITIAL_STATE)
  console.log(cartItems);
  
  const SetCartItems=(cartItems)=>{
    const count=cartItems.reduce((total,itemQ)=>total=total+itemQ.quantity,0)
  

    const total=cartItems.reduce((total,cur)=>{
      return total+=cur.price*cur.quantity;
    },0)
    
    dispatch(createAction(Cart_ACTION_TYPES.ADD_ITEM_TO_CART,{cartItems:cartItems,cartCount:count,totalAmt:total}))
  }
 

  const removeItem=(product)=>{
    SetCartItems(cartItems.filter((item)=>item.id!==product.id))
  }

  const  AddItemToCart=(product)=>{
    SetCartItems(AddAndIncQuantity(cartItems, product))
  }
  const CartItemReduce=(product)=>{
    SetCartItems(decItem(cartItems,product))
  }
  
  const setIsCartOpen=()=>{
    dispatch(createAction(Cart_ACTION_TYPES.SET_IS_CART_OPEN,!isCartOpen))
  }
  
  const value = { isCartOpen, setIsCartOpen ,cartItems,AddItemToCart,cartCount,CartItemReduce,removeItem,totalAmt};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
