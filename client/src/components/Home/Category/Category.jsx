import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({categories}) => {
    const navigate = useNavigate()
    return <div className="shop-by-category">
        <div className="categories">
            {
                categories?.map((category,index) => (
                    <div className="category" key={index} onClick={()=>navigate(`/category/${ category.id}`)}>
                        <img src={
                            process.env.REACT_APP_BASE_URL + 
                            category.attributes.img.data.attributes.url
                        } alt={category.title} />
                    </div>
                ))
            }
        </div>
    </div>;
};

export default Category;
