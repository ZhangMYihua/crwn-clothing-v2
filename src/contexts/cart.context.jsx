import { createContext ,useReducer}  from "react";

import { createAction } from './../utils/reducer/reducer.utils';

const addCartItem =(cartItems,productToAdd)=>{
 
    //find if cartItems contains productToAdd
 const exisitingCartItem = cartItems.find((cartItem)=>cartItem.id===productToAdd.id)
    
    //if Found increment quantity
     if(exisitingCartItem){
        return cartItems.map((cartItem)=>cartItem.id===productToAdd.id?{...cartItem, quantity:cartItem.quantity+1}:cartItem)
     }

    //return new array with modified cartItems ,new cart Items
    return [...cartItems,{...productToAdd, quantity:1}]
}

   const removeCartItem =(cartItems,cartItemToRemove)=>{

    //find the cart item to remove
    const exisitingCartItem = cartItems.find((cartItem)=>cartItem.id===cartItemToRemove.id)

    //check if the quantity is equal to 1, if it is remove the item from the cart 
    if(exisitingCartItem.quantity ===1){
      return cartItems.filter((cartItem)=>{return cartItem.id!== cartItemToRemove.id})
    }

   return cartItems.map((cartItem)=>cartItem.id===cartItemToRemove.id?{...cartItem, quantity:cartItem.quantity-1}:cartItem)
    //return back cartitems with making cart item with reduced quantity
   }


  const  clearCartItem=(cartItems,cartItemToClear)=>{
   return cartItems.filter((cartItem)=>{return cartItem.id!== cartItemToClear.id})
  }



  

export const CartContext = createContext({
    isCartOpen : false,
    setisCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0,
    removeItemFromCart :()=>{},
    clearItemFromCart:()=>{},
    cartTotal:0
    
})

const INTIAL_STATE ={
   isCartOpen : false,
   cartItems:[],
   cartCount:0,
   cartTotal:0
}


const CART_ACTION_TYPES ={
   SET_CART_ITEMS:"SET_CART_ITEMS",
   SET_IS_CART_OPEN:'SET_IS_CART_OPEN'
}



const cartReducer =(state,action)=>{
   const {type, payload} = action
   
   switch(type){
      case CART_ACTION_TYPES.SET_CART_ITEMS:
         return{
            ...state,
            ...payload
         }
         case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return{
               ...state,
               isCartOpen:payload
            }

      default:
         throw new Error(`un handled type of ${type} in cartReducer`)
   }


}







export const CartProvider=({children})=>{
   //  const [isCartOpen, setisCartOpen] = useState(false)
   //  const [cartItems,setCartItems] =  useState([])
   //  const [cartCount,setCartCount] = useState(0)
   //  const [cartTotal,setCartTotal] = useState(0)

   const [state,dispatch] = useReducer(cartReducer,INTIAL_STATE)

  const {cartItems,cartCount,cartTotal,isCartOpen} = state

   //  useEffect(()=>{
   //  const newCartCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
   //  setCartCount(newCartCount)
   //  },[cartItems])

   //  useEffect(()=>{
   //    const newCartTotal = cartItems.reduce((total,cartItem)=>total + cartItem.quantity * cartItem.price ,0)
   //    setCartTotal(newCartTotal)
   //    },[cartItems])
  
   const updateCartItemsReducer = (newCarItems)=>{

    //generate new cart total
     //generate new cartcount

    const newCartTotal = newCarItems.reduce((total,cartItem)=>total + cartItem.quantity * cartItem.price ,0)
    const newCartCount = newCarItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
   
   
   
   //  dispatch({type:CART_ACTION_TYPES.SET_CART_ITEMS, payload:{ cartItems:newCarItems, cartCount:newCartCount,cartTotal:newCartTotal}})
     dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{ cartItems:newCarItems, cartCount:newCartCount,cartTotal:newCartTotal}))
  
  
   }


   const addItemToCart=(productToAdd)=>{
         //  setCartItems(addCartItem(cartItems,productToAdd))
    const newCarItems = addCartItem(cartItems,productToAdd)
    updateCartItemsReducer(newCarItems)
   }
   
   const removeItemFromCart=(cartItemToRemove)=>{
   //  setCartItems(removeCartItem(cartItems,cartItemToRemove))
   const newCarItems = removeCartItem(cartItems,cartItemToRemove)
   updateCartItemsReducer(newCarItems)
 }
 const clearItemFromCart=(cartItemToClear)=>{
   // setCartItems(clearCartItem(cartItems,cartItemToClear))
   const newCarItems = clearCartItem(cartItems,cartItemToClear)
   updateCartItemsReducer(newCarItems)
}
  
const setisCartOpen = (bool)=>{
      // dispatch({type:CART_ACTION_TYPES.SET_IS_CART_OPEN,payload:bool})
      dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool))
   
   }
  

    const value = {isCartOpen,setisCartOpen,addItemToCart,cartItems,cartCount,removeItemFromCart,clearItemFromCart,cartTotal}
    return(
    <CartContext.Provider value={value}>
     {children}
    </CartContext.Provider>

    )
}
