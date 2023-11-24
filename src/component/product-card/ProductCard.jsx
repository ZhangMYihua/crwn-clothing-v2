import React from 'react'
import "./productcart.scss"
import Button from '../Button/Button';
const ProductCard = ({product}) => {
 
  const { name, price, imageUrl } = product;
  console.log(price);
  return (
    <div className='product-card-container'>
      <img src={product.imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted'>Add to card</Button>
    </div>
  )
}

export default ProductCard
