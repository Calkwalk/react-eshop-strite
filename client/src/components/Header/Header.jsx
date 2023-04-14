import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';

import Search from "./Search/Search";
import Cart from '../Cart/Cart';

import "./Header.scss";
import { Context } from "../../utils/context";

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [showMenu, setShowMenu] = useState(false)

    const navigate = useNavigate();
    const {cartCount} = useContext(Context)

    const handleScroll = () => {
        const offset = window.pageYOffset;
        
        if(offset > 80) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    })

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <BiMenu className="left-menu" onClick={() => setShowMenu(!showMenu)}/>
                    <ul className={`left ${showMenu? '' : 'hide-menu'}`}>
                        <li onClick={()=>{
                            setShowMenu(false)
                            navigate('/home')
                            }}>Home</li>
                        <li onClick={()=>{
                            setShowMenu(false)
                            // navigate('/home')
                            }}>About</li>
                        <li onClick={()=>{
                            setShowMenu(false)
                            // navigate('/home')
                            }}>Categories</li>
                    </ul>
                    <div className="center">
                        CALKWALK STORE
                    </div>
                    <div className="right">
                        <TbSearch  onClick={() => setShowSearch(!showSearch)}/>
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={() =>setShowCart(!showCart)}>
                            <CgShoppingCart />
                            { cartCount > 0 && <span>{cartCount}</span> }
                        </span>
                    </div>
                </div>
            </header>

            { showCart && <Cart setShowCart={setShowCart} /> }

            { showSearch && <Search setShowSearch={setShowSearch} /> }
        </>
        
    );
};

export default Header;
