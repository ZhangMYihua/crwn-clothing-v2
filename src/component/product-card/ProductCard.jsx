import React from 'react'
import "./productcart.scss"
import Button from '../Button/Button';
import { addItemToCart,addItemQuantity } from '../../slices/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
const ProductCard = ({product}) => {
  const dispatch=useDispatch();
  const {cartItems}=useSelector((state)=>state.cart);
  const { name, price, imageUrl } = product;
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
  const handleAddToCart=()=>{
   
   dispatch(addItemToCart( AddAndIncQuantity(cartItems,product)))
  }

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted' onClick={handleAddToCart}>Add to card</Button>
    </div>
  )
}

export default ProductCard
