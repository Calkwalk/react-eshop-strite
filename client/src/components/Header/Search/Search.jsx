import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Search.scss";
import { MdClose, MdSearch } from "react-icons/md";
import useFetch from "../../../hooks/useFetch";

const Search = ({setShowSearch}) => {
    const [opened, setOpened] = useState(true);

    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleQueryChange = (e) => {
        const q = e.target.value;
        setQuery(q)
        console.log(q)
    }

    const closeSearch = () => {
        setOpened(false)
        setTimeout(() => {
            setShowSearch(false)
            setOpened(true)
        }, 500);
    }

    let products = useFetch(`/api/products?populate=*&[filters][title][$contains]=${query}`)

    if(!query.length) {
        products = null;
    }

    return <div className={`search-modal ${opened? 'slide-in' : 'slide-out'}`}>
        <header className="search-header">
            <div className="form-field">
                
                <div className="input-box">
                    <MdSearch className="search-icon"/>
                    <input type="text" autoFocus placeholder="Search for Products"
                        value={query}
                        onChange={handleQueryChange}
                        onBlur={handleQueryChange}    
                    />
                </div> 
                <div className="close-button" onClick={()=> closeSearch() }>
                    <MdClose className="close-icon"  />
                </div>
            </div>
            
        </header>
        
        <div className="search-result-content">
            <div className="search-results">
                {
                    products?.map((product, index) => (
                        <div className="result-item" key={index} 
                            onClick={() => {
                                navigate(`/product/${product.id}`,{replace: true})
                                closeSearch()
                            }}
                        >
                            <div className="img-container">
                                <img src={
                                    process.env.REACT_APP_BASE_URL + 
                                    product.attributes.img.data[0]?.attributes.url
                                } alt={product.attributes.title} />
                            </div>
                            <div className="item-details">
                                <span className="item-name">{product.attributes.title}</span>
                                <span className="item-desc">{product.attributes.desc}</span>
                                <span className="item-url">htt://locahost.com/products/{product.id}</span>
                                
                            </div>
                        </div>
                    ))
                }
                
                
            </div>
        </div>
    </div>;
};

export default Search;
