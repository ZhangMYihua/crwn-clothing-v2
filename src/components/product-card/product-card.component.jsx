import { useContext } from 'react';

import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);

    const handler = (event) => {
        console.log(product)
        addItemToCart(product)
    }
    return (
        <div className='product-card-container'>
            <img src={product.imageUrl} alt={`${product.name}`} />
            <div className='footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}</span>
            </div>
            <Button onClick={handler} buttonType="inverted">Add to Card</Button>
        </div>
    );
}

export default ProductCard;