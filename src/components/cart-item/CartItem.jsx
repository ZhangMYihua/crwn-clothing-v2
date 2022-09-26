import './cart-item.scss'

export const CartItem = ({cartItem}) => {
  const {name, quantity, imgUrl} = cartItem;
  return (
    <div>
      {/* <img src={imgUrl} alt={name} /> */}
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  )
}