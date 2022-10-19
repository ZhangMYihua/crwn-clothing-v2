
import { createAction } from "../../utils/reducer/reducer.utils";
import CART_ACTION_TYPES from "./cart.types";



// export const updateCartItemsReducer = (cartItems) =>
// createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,cartItems);





// ---------------------------------------------


// export const addItemToCart = (cartItems,itemToAdd) =>{
    
//   const NewCartItems = addCartItem(itemToAdd,cartItems)
//   return createAction(SET_ACTION_TYPES.SET_CART_ITEMS,NewCartItems)
// };


const addCartItem = (itemToAdd, cartItems) => {
  console.log (`itemToAdd: ${itemToAdd} , cartItems: ${cartItems}`)
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



// ---------------------------------------------

export const removeItemFromCheckout = (cartItems,currentItem)=>{
    const NewCartItems = deleteItem(currentItem,cartItems)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, NewCartItems)
    
};
  
export const decQuantity = (cartItems,currentItem)=>{
    const NewCartItems = decItemQuantity(currentItem,cartItems)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,NewCartItems)
};
  
export const addItemToCart = (cartItems,itemToAdd) =>{
    
    const NewCartItems = addCartItem(itemToAdd,cartItems)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,NewCartItems)
};
  
export const setIsCartOpen = (Bool)=>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN ,Bool); 

