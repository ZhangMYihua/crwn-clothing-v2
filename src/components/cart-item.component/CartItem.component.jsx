import "./cartItem.styles.scss";

const CartItem = ({cartItem})=> {
    const {id,name, quantity} = cartItem;
    console.log(name,quantity)
    return(
        <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )

}

export default CartItem;