import { createContext, useEffect, useState }  from "react";
import CartItem from './../components/cart-item/cart-item.component';

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


export const CartProvider=({children})=>{
    const [isCartOpen, setisCartOpen] = useState(false)
    const [cartItems,setCartItems] =  useState([])
    const [cartCount,setCartCount] = useState(0)
    const [cartTotal,setCartTotal] = useState(0)


    useEffect(()=>{
    const newCartCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
    setCartCount(newCartCount)
    },[cartItems])

    useEffect(()=>{
      const newCartTotal = cartItems.reduce((total,cartItem)=>total + cartItem.quantity * cartItem.price ,0)
      setCartTotal(newCartTotal)
      },[cartItems])
  


   const addItemToCart=(productToAdd)=>{
      setCartItems(addCartItem(cartItems,productToAdd))
   }
   
   const removeItemFromCart=(cartItemToRemove)=>{
    setCartItems(removeCartItem(cartItems,cartItemToRemove))
 }
 const clearItemFromCart=(cartItemToClear)=>{
   setCartItems(clearCartItem(cartItems,cartItemToClear))
}
    const value = {isCartOpen,setisCartOpen,addItemToCart,cartItems,cartCount,removeItemFromCart,clearItemFromCart,cartTotal}
    return(
    <CartContext.Provider value={value}>
     {children}
    </CartContext.Provider>

    )
}
