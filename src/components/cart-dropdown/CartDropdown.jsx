import './cart-dropdown.scss'
import { Button } from '../button/Button'

export const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        
      </div>
      <Button>Go to checkout</Button>
    </div>
  )
}