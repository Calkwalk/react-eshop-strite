import { createContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

export const Context = createContext();

export const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();

    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0.00);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0)
    },[location])

    useEffect(()=>{
        
        let subtotal = 0.00
        cartItems.map(item => subtotal += item.attributes.quantity * item.attributes.price )
        setCartSubTotal(subtotal)

        setCartCount(cartItems.length)
    },[cartItems])

    // add to chandleAddToCartart
    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id);
        if(index !== -1){
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            // items = [...items, product]
            items.push(product)
        }

        setCartItems(items)
    }

    // reomve from cart
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter(p => p.id !== product.id);

        setCartItems(items)
    }

    // cart product quantity changed
    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id);
        if(type === 'inc'){
            if(items[index].attributes.quantity < 99) {
                items[index].attributes.quantity +=1
                setCartItems(items)
            }
                
        } else {
            if(items[index].attributes.quantity > 1){
                items[index].attributes.quantity -=1
                setCartItems(items)
            }
        }
    }

    return (
        <Context.Provider value={{
            categories, setCategories,
            products, setProducts,
            cartItems, setCartItems,
            cartCount, setCartCount,
            cartSubTotal, setCartSubTotal,
            handleAddToCart, handleRemoveFromCart, handleCartProductQuantity
        }}>
            {children}
        </Context.Provider>
    );
}

export default AppContext;