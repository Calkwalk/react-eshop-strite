import { MdClose } from "react-icons/md";
import "./CartItem.scss";

import { Context } from "../../../utils/context";
import { useContext } from "react";

const CartItem = ({item}) => {

    const {handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);

    return <div className="cart-product">
        <div  className="img-container">
        <img src={
                process.env.REACT_APP_BASE_URL + 
                item.attributes.img.data[0]?.attributes.url
            } alt={item.attributes.title} />
        </div>
        <div className="product-details">
            <span className="name">Sony Headphone SE300Ab</span>
            <MdClose className="close-button"  onClick={() => handleRemoveFromCart(item)} />
            <div className="quantity-buttons">
                <span onClick={() => handleCartProductQuantity('dec', item) }>-</span>
                <span>{item.attributes.quantity}</span>
                <span onClick={() => handleCartProductQuantity('inc', item) }>+</span>
            </div>
            <div className="text">
                <span>{item.attributes.quantity}</span>
                <span>x</span>
                <span className="price">{item.attributes.price}</span>
                <span>&nbsp;=&nbsp;</span>
                <span className="subtotal">{item.attributes.quantity * item.attributes.price}</span>
            </div>
        </div>
    </div>;
};

export default CartItem;
