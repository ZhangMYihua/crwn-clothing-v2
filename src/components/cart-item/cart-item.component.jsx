import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
<<<<<<< HEAD
  const { name, imageUrl, price, quantity } = cartItem;
=======
  const { imageUrl, price, name, quantity } = cartItem;

>>>>>>> creating cartItem component and add item functionality
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
