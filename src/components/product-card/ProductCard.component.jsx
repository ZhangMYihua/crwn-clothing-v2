import {ButtonS,ProductCardContainer,Footer,Name,Price} from "./productCard.styles.jsx"
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useDispatch,useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const ProductCard = ({product})=>{
    const {name,imageUrl,price} = product;
    const CartItems = useSelector(selectCartItems)
    
    // const {addItemToCart} = useContext(CartContext);
    const dispatch = useDispatch()
    const addItemToCartHandle = ()=> {
        console.log(`add to cart pressed: ${product}`)
        dispatch(addItemToCart(CartItems,product))};
    
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