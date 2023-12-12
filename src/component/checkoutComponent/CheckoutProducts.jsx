import './checkOutcomp.scss'
import { useSelector,useDispatch } from 'react-redux';
import { addItemToCart,removeItem ,reduceItemQuantity} from '../../slices/cartSlice';

const CheckoutProducts = (product) => {
  const {cartItems}=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
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
    const{imageUrl,name,quantity,price}=product.product;
    const handleInc=()=>{
        dispatch(addItemToCart(AddAndIncQuantity(cartItems,product.product)))
    }
    const HandleDec=()=>{
      dispatch(reduceItemQuantity(product.product))
    }
    const HandleRemove=()=>{
      dispatch(removeItem(product.product))
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
