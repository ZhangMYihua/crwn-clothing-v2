import { useContext } from 'react'
import Button from '../ButtonForm/ButtonFormComponents.jsx'

import { OpenClose } from '../../Kontext/OpenCloseCardContext.jsx'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addCartItemInCart } = useContext(OpenClose)

  const addProductToCart = () => addCartItemInCart(product)
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">
        Add to card
      </Button>
    </div>
  )
}

export default ProductCard
