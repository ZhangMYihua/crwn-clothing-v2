import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { data, setCartData } = useContext(CartContext);

  const toogleCartOpen = () => {
    const { opened } = data;
    setCartData({...data, opened: !opened});
  };

  return (
    <div className='cart-icon-container' onClick={toogleCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )
};

export default CartIcon;