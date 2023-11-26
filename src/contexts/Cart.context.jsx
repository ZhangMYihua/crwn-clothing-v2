import { createContext, useEffect, useState } from 'react';


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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems,SetCurtItems]=useState([])
  const [cartCount,setCartCount]=useState(0);
  const [totalAmt,setTotalAmt]=useState(0)
  useEffect(()=>{
    const total=cartItems.reduce((total,cur)=>{
      return total+=cur.price*cur.quantity;
    },0)
    setTotalAmt(total)
  },[cartItems])
  const removeItem=(product)=>{
    SetCurtItems(cartItems.filter((item)=>item.id!==product.id))
  }

  useEffect(()=>{
  const count=cartItems.reduce((total,itemQ)=>total=total+itemQ.quantity,0)
    setCartCount(count);
  },[cartItems])

  const  AddItemToCart=(product)=>{
     
    SetCurtItems(AddAndIncQuantity(cartItems, product))
  }
  const CartItemReduce=(product)=>{
    SetCurtItems(decItem(cartItems,product))
  }
  

  const value = { isCartOpen, setIsCartOpen ,cartItems,AddItemToCart,cartCount,CartItemReduce,removeItem,totalAmt};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
