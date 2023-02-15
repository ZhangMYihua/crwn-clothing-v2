import "./product-card.styles.scss";
import Button from "../button/button.component.jsx";

const ProductCard = ({product}) =>{
    const {name ,imageUrl, price } =product;
return(
        <div className="product-card-container">
            <img src = {imageUrl} alt = {`${name}`}/>
            <div className="footer">
                <span className="name"><strong>{name}</strong></span>
                <span className="price"><b>${price}</b> </span>
            </div>
            <Button buttontype = "inverted">Add to Cart</Button>

        </div>
    );
}
export default ProductCard;