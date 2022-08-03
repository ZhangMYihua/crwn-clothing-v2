import './ProductCard.scss'
import Button from '../Button/Button'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (
        <div className='prod-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='prod-card-details'>
                <span className='prod-name'>
                    {name}
                </span>
                <span className='prod-price'>
                    ${price}
                </span>
            </div>
            <Button
                btnType='addToCart'
                onClick={addProductToCart}
            >
                Add to cart
            </Button>
        </div>
    )
}

export default ProductCard