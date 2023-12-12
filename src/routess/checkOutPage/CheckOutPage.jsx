import "./checkout.scss"
import CheckoutProducts from '../../component/checkoutComponent/CheckoutProducts'
import { useSelector } from 'react-redux'
export const CheckOutPage = () => {
    const {cartItems,totalAmt}=useSelector((state)=>state.cart);
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
