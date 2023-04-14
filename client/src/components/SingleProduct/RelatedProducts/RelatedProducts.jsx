import useFetch from  "../../../hooks/useFetch"

import Products from "../../Products/Products"

const RelatedProducts = ({productId, categoryId}) => {
    const products = useFetch(
        `/api/products?populate=*&[filters][id][$ne]=${productId}
        &[categories][id][$eq]=${categoryId}
        &pagination[start]=0&pagination[limit]=4`)
    return <div className="related-products">
        <Products products={products} headingText="Related Products" />
    </div>;
};

export default RelatedProducts;
