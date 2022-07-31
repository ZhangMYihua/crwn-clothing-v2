import './ProductCard.scss'
import Button from '../Button/Button'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product

    return (
        <div className='prod-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='prod-card-footer'>
                <span className='prod-name'>
                    {name}
                </span>
                <span className='prod-price'>
                    {price}
                </span>
            </div>
            <Button
                btnType='addToCart'
            >
                Add to cart
            </Button>
        </div>
    )
}

export default ProductCard