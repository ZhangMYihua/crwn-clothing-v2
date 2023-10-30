import { ProductContainer, Image, Footer, Name, Price } from './product-card.styles';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';


const ProductCard = ({product})=>{
    const { addItemToCart} = useContext(CartContext)
    const { name, price, imageUrl} = product;

    const addProductToCart = () =>{
        addItemToCart(product)
    }
    return (
        <ProductContainer>
            <Image src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType='inverted' onClick={addProductToCart} className='button'>Add to Cart</Button>
        </ProductContainer>
    )
}

export default ProductCard;