import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';
const CartIcon = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);
  const toggleCart = () => setIsOpen(!isOpen);
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
