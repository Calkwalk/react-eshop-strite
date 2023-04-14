import { useContext, useState } from 'react';
import "./SingleProduct.scss";

import RelateProducts from "./RelatedProducts/RelatedProducts";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaCartPlus } from "react-icons/fa";

import { useParams } from "react-router-dom";
import useFetch from  "../../hooks/useFetch";

import { Context } from "../../utils/context";

const SingleProduct = () => {
    const { handleAddToCart } = useContext(Context);

    const {id} = useParams();
    const product = useFetch(`/api/products/${id}?populate=*`);

    const [quantity, setQuantity] = useState(1)
    const [isAdding, setIsAdding] = useState(false)

    // already exectue on content 
    // useEffect(()=>{ document.documentElement.scrollTop = document.body.scrollTop = 0; },[])

    const increase = () => { if(quantity < 99) { setQuantity((prev) => prev + 1) } }
    const decrease = () => { if(quantity > 1)  { setQuantity((prev) => prev - 1) } }

    const AnimateAddProductToCart = () => {
        handleAddToCart(product, quantity)
        setIsAdding(true)
        setTimeout(() => {
            setIsAdding(false)
        }, 1000);
        
    }

    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className={`left ${isAdding? 'adding' : ''}`}>
                <img src={
                        process.env.REACT_APP_BASE_URL + 
                        product?.attributes.img.data[0]?.attributes.url
                    } alt={product?.attributes.title} />
                </div>
                <div className="right">
                    <span className="name">{product?.attributes.title}</span>
                    <span className="price">{product?.attributes.price}</span>
                    <span className="desc">{product?.attributes.desc}</span>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={decrease}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increase}>+</span>
                        </div>
                        <button className="add-to-cart-button" onClick={() => AnimateAddProductToCart()}>
                            <FaCartPlus size={20} />&nbsp; &nbsp; Add to  Cart
                        </button>
                    </div>

                    <span className="divider" />

                    <div className="info-item">
                        <span className="text-bold">Category:</span>
                        <span>Headphones</span>
                    </div>
                    <div className="info-item">
                        <span className="text-bold">Share to:</span>
                        <span className="social-icons">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedin />
                            <FaPinterest />
                        </span>
                    </div>
                </div>
            </div>
            <RelateProducts productId={id} categoryId={product?.attributes.categories.data[0].id} />
        </div>
    </div>;
};

export default SingleProduct;
