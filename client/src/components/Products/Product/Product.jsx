import { useNavigate } from "react-router-dom";

import "./Product.scss";

const Product = ({product}) => {
    const navigate = useNavigate();
    return <div className="product-card">
        <div className="thumbnail" 
            onClick={() => navigate(`/product/${product.id}`,{replace: true})}
        >
            <img src={
                process.env.REACT_APP_BASE_URL + 
                product.attributes.img.data[0]?.attributes.url
            } alt={product.attributes.title} />
        </div>
        
        <div className="product-details">
            <div className="name">{product.attributes.title}</div>
            <div className="price">{product.attributes.price}</div>
        </div>
    </div>;
};

export default Product;
