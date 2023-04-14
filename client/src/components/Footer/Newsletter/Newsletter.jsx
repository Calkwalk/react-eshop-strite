import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaWeixin} from "react-icons/fa"
import "./Newsletter.scss";


const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">Sign up for latest updates and offers</span>
            <div className="form">
                <input type="text" placeholder="Enter Email Address" />
                <button>Subscribe</button>
            </div>
            <div className="text">Will be used in accordance with oure privacy Policy</div>
            <div className="social-icons">
                <FaFacebookF id="fb" />
                <FaTwitter  id="tw"/>
                <FaInstagram id="ig"/>
                <FaLinkedin id="lk"/>
                <FaWeixin id="wx"/>
            </div>
        </div>
    </div>
};

export default Newsletter;
