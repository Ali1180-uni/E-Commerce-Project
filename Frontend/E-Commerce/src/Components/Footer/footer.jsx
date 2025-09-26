import React from "react";
import "./footer.css";
import Footer_logo from "../Assets/logo_big.png";
import Whatsapp_logo from "../Assets/whatsapp_icon.png";
import insta_logo from "../Assets/instagram_icon.png";
import pin_logo from "../Assets/pintester_icon.png";

function Footer() {
  return (
    <div className = "Footer" >
        <div className="footer-logo">
            <img src={Footer_logo} alt="logo" />
            <p>E-Store</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Hubs</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-socials-icon">
            <div className="footer-icon">
                <img src={insta_logo} alt="insta" />
            </div>
            <div className="footer-icon">
                <img src={pin_logo} alt="pin" />
            </div>
            <div className="footer-icon">
                <img src={Whatsapp_logo} alt="whatsapp" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2023 - All Right Reserved</p>
        </div>
</div>
  )
}

export default Footer