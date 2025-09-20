import React, { useState } from "react";
import "./Navbar.css";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

function Navbar(){
    const [line,setLine] = useState("shop");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>E-Store</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setLine("shop")}}>Shop {line === "shop" ? <hr/ > : <></>}</li>
                <li onClick={()=>{setLine("men")}}>Men {line === "men" ? <hr/ > : <></>}</li>
                <li onClick={()=>{setLine("women")}}>Women {line === "women" ? <hr/ > : <></>}</li>
                <li onClick={()=>{setLine("kids")}}>Kids {line === "kids" ? <hr/ > : <></>}</li>
            </ul>
            <div className="login">
                <button>Login</button>
                <img src={cart_icon} alt="cart" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar;