import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

let style = {
    textDecoration: "none",
    color: "black",
}

function Navbar(){
    const [line,setLine] = useState("shop");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>E-Store</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setLine("shop")}}> <Link to="/" style={style}>Shop</Link> {line === "shop" ? <hr/ > : <></>}</li>
                <li onClick={()=>{setLine("men")}}><Link to="/men" style={style}>Men</Link> {line === "men" ? <hr/ > : <></>}</li>
                <li onClick={()=>{setLine("women")}}><Link to="/women" style={style}>Women</Link> {line === "women" ? <hr/ > : <></>}</li>
                <li onClick={()=>{setLine("kids")}}><Link to="/kids" style={style}>Kids</Link> {line === "kids" ? <hr/ > : <></>}</li>
            </ul>
            <div className="login">
            <Link to="/loginSignup"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar;