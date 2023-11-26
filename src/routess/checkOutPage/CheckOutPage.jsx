import React, { useContext } from 'react'
import "./checkout.scss"
import { CartContext } from '../../contexts/Cart.context'
import CheckoutProducts from '../../component/checkoutComponent/CheckoutProducts'

export const CheckOutPage = () => {
    const {cartItems,totalAmt}=useContext(CartContext)
  return (
    <div className='ContainerCheckOut'>
        <div class="headings">
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
        </div>
    <div className="products">
        {
            cartItems?cartItems.map((product)=>(
                <CheckoutProducts key={product.id} product={product}/>
            )):""
        }

    </div>
   
    <div>
    
    <h1>Total: {totalAmt}</h1>
    </div>
    </div>
  )
}
