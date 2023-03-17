import { useDispatch, useSelector } from "react-redux";
import { FC } from "react";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
    ProductCartContainer,
    Footer,
    Name,
    Price,
} from "./product-card.styles";

export type ProductCartProps = {
    product: {
        id: number;
        name: string;
        price: number;
        imageUrl: string;
    };
};

const ProductCard: FC<ProductCartProps> = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to card
            </Button>
        </ProductCartContainer>
    );
};

export default ProductCard;
