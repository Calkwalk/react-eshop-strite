import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {

    return <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
    
        <div className="products">
            {
                products?.map((product, index) => (<Product product={product} key={index} />) )
            }
        </div>
    </div>;
};

export default Products;
