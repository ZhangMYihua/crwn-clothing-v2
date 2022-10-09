import {ButtonS,ProductCardContainer,Footer,Name,Price} from "./productCard.styles.jsx"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";


const ProductCard = ({product})=>{
    const {name,imageUrl,price} = product;
    const {addItemToCart} = useContext(CartContext);
    const addItemToCartHandle = ()=> addItemToCart(product)
    
return(
    <ProductCardContainer>
        <img src={imageUrl} alt ={`${name}`} />
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <ButtonS buttonType = "inverted" onClick={addItemToCartHandle}>Add to cart</ButtonS>
    </ProductCardContainer>
)
}
export default ProductCard;