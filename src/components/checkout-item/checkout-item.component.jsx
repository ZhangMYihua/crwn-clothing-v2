import './checkout-item.scss'

const CheckoutItem = (cartItem) => {
const {name, imageUrl, price, quantity}
return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
        </div>
        <span></span>
        <span></span>
        <span></span>
        <div className=''></div>
    </div>
)
}


export default CheckoutItem;