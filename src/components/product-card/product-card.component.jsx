import './product-card.styles.scss';

import Button from '../button/button.component';

const ProductCard = ({ product }) => {
    return (
        <div className='product-card-container'>
            <img src={product.imageUrl} alt={`${product.name}`} />
            <div className='footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}</span>
            </div>
            <Button buttonType="inverted">Add to Card</Button>
        </div>
    );
}

export default ProductCard;