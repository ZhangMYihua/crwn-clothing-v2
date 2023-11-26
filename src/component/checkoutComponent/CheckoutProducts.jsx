import React, { useContext } from 'react'
import './checkOutcomp.scss'
import { CartContext } from '../../contexts/Cart.context';



const CheckoutProducts = (product) => {
    const{imageUrl,name,quantity,price}=product.product;
    const{AddItemToCart,CartItemReduce,removeItem}=useContext(CartContext)
    const handleInc=()=>{
        AddItemToCart(product.product)
    }
    const HandleDec=()=>{
        CartItemReduce(product.product)
    }
    const HandleRemove=()=>{
        removeItem(product.product)
    }
  return (
    <div className='checkoutCompCont'>
      <hr />
      <div className="singleProductsCont">
        <img src={imageUrl} alt={name} />
        <span>{name}</span>
        <div className="quantity">
            <span onClick={HandleDec}>&#10094;</span>
            <span >{quantity}</span>
            <span onClick={handleInc}>&#10095;</span>

        </div>
        <span>${price*quantity}</span>
        <span onClick={HandleRemove} className='rem'>&#10005;</span>
      </div>
     
    </div>
  )
}

export default CheckoutProducts
