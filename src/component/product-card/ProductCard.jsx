import React from 'react'
import "./productcart.scss"
import Button from '../Button/Button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';

const ProductCard = ({product}) => {
 const {cartItems,AddItemToCart}=useContext(CartContext)
  const { name, price, imageUrl } = product;
  const handleAddToCart=()=>{
    AddItemToCart(product)
  }
  return (
    <div className='product-card-container'>
      <img src={product.imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted' onClick={handleAddToCart}>Add to card</Button>
    </div>
  )
}

export default ProductCard
