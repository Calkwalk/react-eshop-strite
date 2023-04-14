import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import { useContext, useState } from "react";

import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from "../../utils/api";

const Cart = ({setShowCart}) => {
    const { cartItems, cartCount, cartSubTotal }= useContext(Context)
    const [hidding, setHidding] = useState(false)
    
    const hideCart = () => {
        setHidding(true)
        setTimeout(() => {
            setShowCart(false);
            setHidding(false)
        }, 500);
    }

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUB_KEY)

    const handlePayment = async () => {  
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders/", 
                {
                    products: cartItems
                }
            )

            console.log(res.data)
    
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
        } catch (error) {
            console.log(error)
        }
    }

    return <div className={`cart-panel ${hidding? 'hidding' : ''}`}>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={()=>hideCart()}>
                    <MdClose />
                    <span className="text">Close</span>
                </span>
            </div>

            {
                (!cartItems || cartItems.length === 0) && 
                <div className="empty-card">
                    <BsCartX />
                    <span className="no-products">No products in the cart.</span>
                    <span className="return-cta" onClick={()=>hideCart()}>RETURN TO SHOP</span>
                </div>
            }

            <div className="cart-items-container">

                {
                    cartItems?.map((item, index) => (
                        <CartItem  item={item} key={index}/>
                    ))
                
                }   
            </div>
            {
                (cartItems && cartItems.length > 0) &&
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">subtotal ({cartCount})</span>
                        <span className="text total">{cartSubTotal}</span>
                    </div>
                    <div className="btn">
                        <button className="checkout" onClick={handlePayment}>Checkout</button>
                    </div>
                    
                </div>
            }
        </div>
    </div>;
};

export default Cart;
