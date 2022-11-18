import CheckoutItem from "../../components/checkout-item/checkout-item.component"

const Checkout = () => {

    return (
        <div className="checkout-container">
            <tr className="checkout-header">
                <th className="header-block">Product</th>
                <th className="header-block">Description</th>
                <th className="header-block">Quantity</th>
                <th className="header-block">Price</th>
                <th className="header-block">Remove</th>
            </tr>
        </div>
    )
};

export default Checkout;