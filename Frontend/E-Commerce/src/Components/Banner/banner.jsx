import React from "react";
import "./banner.css";
import Hand_icon from "../Assets/hand_icon.png";
import Arrow_icon from "../Assets/arrow.png";
import Banner_image from "../Assets/hero_image.png";

function Banner(){
    return (
        <div className="banner">
            <div className="banner-left">
                <h2>New Arrivals</h2>
                <div>
                    <div className="hand-icon">
                        <p>New</p>
                        <img src={Hand_icon} alt="icon" />
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="banner-latest-btn">
                    <div>Latest Collection</div>
                    <img src={Arrow_icon} alt="icon" />
                </div>
            </div>
            <div className="banner-right">
                <img src={Banner_image} alt="image" />
            </div>
        </div>
    )
}

export default Banner;