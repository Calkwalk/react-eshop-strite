import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";

import Payment from '../../assets/payments.png';
import "./Footer.scss";


const Footer = () => {
    return <div className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Pellentesque habitant morbi tristique senectus et netus et 
                    malesuada fames ac turpis egestas. Vestibulum tortor quam, 
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec 
                    eu libero sit amet quam egestas semper. Aenean ultricies mi 
                    vitae est. Mauris placerat eleifend leo.6
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <ul>
                    <li>
                        <FaLocationArrow />
                        <div className="text">
                            Kayaloram Rd, Punnamada, Kottankulangatra, Alappuzham,
                            Kerala, 688006
                        </div>
                    </li>
                    <li>
                        <FaMobileAlt />
                        Phone: 13631728178
                    </li>
                    <li>
                        <FaEnvelope />
                        Email: calkwalk@163.com
                    </li>
                </ul>
            </div>
            <div className="col">
                <div className="title">Categries</div>
                <ul>
                    <li>Heapones</li>
                    <li>Smart Watches</li>
                    <li>Bluetooth Speakers</li>
                    <li>Wireless Earbuds</li>
                    <li>Home Theatre</li>
                    <li>Projetors</li>
                </ul>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Privacy Policy</li>
                    <li>Returns</li>
                    <li>Terms & Conditions</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>

        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    CalkwalkStore 2022 Created By Calwalk. Premium E-Commerce Solutioins.
                </div>
                <img src={Payment} alt="payment" />
            </div>
        </div>
    </div>
};

export default Footer;
