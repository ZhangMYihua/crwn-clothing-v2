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



export const CartContext = createContext({
    isCartOpen : false,
    setisCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0
})


export const CartProvider=({children})=>{
    const [isCartOpen, setisCartOpen] = useState(false)
    const [cartItems,setCartItems] =  useState([])
    const [cartCount,setCartCount] = useState(0)


    useEffect(()=>{
    const newCartCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
    setCartCount(newCartCount)
    },[cartItems])



   const addItemToCart=(productToAdd)=>{
      setCartItems(addCartItem(cartItems,productToAdd))
   }


    const value = {isCartOpen,setisCartOpen,addItemToCart,cartItems,cartCount}
    return(
    <CartContext.Provider value={value}>
     {children}
    </CartContext.Provider>

    )
}
