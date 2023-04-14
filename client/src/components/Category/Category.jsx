import "./Category.scss";

import Products from "../Products/Products"
import { useParams } from "react-router-dom";

import useFetch from  "../../hooks/useFetch";

const Category = () => {
    const {id} = useParams()
    const category = useFetch(`/api/categories/${id}?populate=*`);
    const products = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)

    return <div className="catetory-main-content">
        <div className="layout">
            { category &&
            <div className="main-category">
                <div className="title">
                    {category.attributes.title}
                </div>
                <p className="details">
                    <img src={
                        process.env.REACT_APP_BASE_URL + 
                        category.attributes.img.data.attributes.url
                    } alt={category.title} align="left" />
                    <span className="desc">
                        <br/>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada 
                        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet 
                        quam egestas semper. 
                        Aenean ultricies mi vitae est. Mauris placerat eleifend leo
                    </span>
                </p> 
            </div>
            }
            <Products products={products} innerPage="false"/>
        </div>
    </div>;
};

export default Category;
