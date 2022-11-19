import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isOpen, setCartIsOpen, total } = useContext(CartContext);
  const toogleCartOpen = () => {
    setCartIsOpen(!isOpen);
  };

  return (
    <div className='cart-icon-container' onClick={toogleCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{ total }</span>
    </div>
  )
};

export default CartIcon;