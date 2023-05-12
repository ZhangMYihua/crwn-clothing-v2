
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import {ProductCartContainer, Footer, Name,Price} from './products-card.style.jsx';



const ProductCard = ({product}) => {
    
    const {name,imageUrl, price} = product;
    const {addItemsToCart} = useContext(CartContext);


    const addProductToCard = () => addItemsToCart(product);

 return (

    <ProductCartContainer>

    <img src={imageUrl} alt ={`${name}`}/> 

<Footer>
    <Name>{name}</Name>

    <Price>{price}</Price>


</Footer>
    <Button $inverted onClick={addProductToCard} > Add to card</Button>

</ProductCartContainer>

 )

       
}


export default ProductCard ;