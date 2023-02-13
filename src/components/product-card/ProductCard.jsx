import { Button, BUTTON_TYPE_CLASSES } from '../button/Button'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ProductCardContainer, Footer, Name, Price } from './product-card.styles'

export const ProductCard = ({product, category}) => {
  const { addItemToCart } = useContext(CartContext)
  const {name, price, imageUrl} = product;

  const addProductToCart = () => addItemToCart(product)

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button 
        buttonType={BUTTON_TYPE_CLASSES.inverted} 
        onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}