
import './products-card.style.scss';

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';

const ProductCard = ({product}) => {
    
    const {name,imageUrl, price} = product;
    const {addItemsToCart} = useContext(CartContext);


    const addProductToCard = () => addItemsToCart(product);

 return (

    <div className='product-card-container'>

    <img src={imageUrl} alt ={`${name}`}/> 

<div className='footer'>
    <span className='name'>{name}</span>

    <span className='price'>{price}</span>


</div>
    <Button buttonType='inverted' onClick={addProductToCard} > Add to card</Button>

</div>

 )

       
}


export default ProductCard ;