import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './checkout-item.scss'

export const CheckoutItem = ( {item} ) => {
  const {imageUrl, name, quantity, price} = item;
  const {addItemToCart, subtractItemFromCart, removeItemFromCart} = useContext(CartContext)

  const removeProductHandler = () => removeItemFromCart(item)
  const addItemHandler = () => addItemToCart(item)
  const subtractItemHandler = () => subtractItemFromCart(item)

  return (
    <div className='checkout-item-container'>
      <div className='image-container' >
        <img src={imageUrl} alt={name}/>
      </div>
      <span className='name' >{name}</span>
      
      <span className="quantity" >
        <div className='arrow' onClick={subtractItemHandler}>
          &#10094;
        </div>
        <span className='value' >{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      
      <span className="price" >{price}</span>
      <span className="remove-button" onClick={removeProductHandler} >&#10005;</span>
    </div>
  )
}