import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.scss'

export const CartIcon = () => {
  return (
    <div className='cart-icon-container' >
      <ShoppingIcon className='shopping-icon'  />
      <span className='item-count'  >0</span>
    </div>
  )
}