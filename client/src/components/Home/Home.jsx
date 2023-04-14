import "./Home.scss";
import Category from "./Category/Category";
import Products from "../Products/Products";

import { useEffect, useContext } from "react";
import { Context } from "../../utils/context";

import fetchDataFromStrApi from "../../utils/api";

const Home = () => {

    const {categories, setCategories, products, setProducts} = useContext(Context);

    useEffect(() =>{
        getCategries();
        getProducts();
    },[])

    const getCategries = async () => {
        fetchDataFromStrApi("/api/categories?populate=*").then(
            res => {
                setCategories(res.data);
            }
        ).catch(error=>{
            console.log(error);
        })
    }

    const getProducts = async () => {
        fetchDataFromStrApi("/api/products?populate=*").then(
            res => {
                setProducts(res.data);
            }
        ).catch(error=>{
            console.log(error);
        })
    }

    return <div className="home">
        <div className="main-content">
            <div className="layout">
                <Category categories={categories} />
                <Products products={products} headingText="Popular Products"/>
            </div>
        </div>
    </div>;
};

export default Home;
