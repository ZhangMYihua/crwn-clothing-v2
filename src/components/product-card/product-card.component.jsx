import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./product-card.styles.scss";
import Button from "../button/button.component.jsx";

const ProductCard = ({product}) =>{
    const {name ,imageUrl, price } =product;
    const { addItemToCart} =useContext(CartContext)

    const addProductToCart = () => addItemToCart(product);


return(
        <div className="product-card-container">
            <img src = {imageUrl} alt = {`${name}`}/>
            <div className="footer">
                <span className="name"><strong>{name}</strong></span>
                <span className="price"><b>${price}</b> </span>
            </div>
            <Button buttontype = "inverted" onClick={()=>{addItemToCart(product)}}>Add to Cart</Button>

        </div>
    );
}
export default ProductCard;