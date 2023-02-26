import './ShopingCartStyles.scss'
import { ReactComponent as ShopingIcong } from '../../Assets/shopping-bag.svg'
import { useContext } from 'react'
import { OpenClose } from '../../Kontext/OpenCloseCardContext'

function ShopingCart() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(OpenClose)

  const cartToggle = () => setIsCartOpen(!isCartOpen)

  return (
    <div className="cart-icon-container" onClick={cartToggle}>
      <ShopingIcong className="shoping-cart" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default ShopingCart
