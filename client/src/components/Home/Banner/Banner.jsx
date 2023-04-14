import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada 
                    fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                    Mauris placerat eleifend leo.
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="banner" />
        </div>
    </div>;
};

export default Banner;
