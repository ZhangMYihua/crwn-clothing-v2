import"./productCard.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button.component"

const ProductCard = ({product})=>{
    const {name,imageUrl,price} = product;
    const {addItemToCart} = useContext(CartContext);
    const addItemToCartHandle = ()=> addItemToCart(product)
    
return(
    <div className = "product-card-container">
        <img src={imageUrl} alt ={`${name}`} />
        <div className = "footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType = "inverted" onClick={addItemToCartHandle}>Add to cart</Button>
    </div>
)
}
export default ProductCard;