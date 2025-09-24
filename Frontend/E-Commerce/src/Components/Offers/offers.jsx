import React from "react";
import "./offers.css";
import ex_image from "../Assets/exclusive_image.png";

function Offers() {
  return (
    <div className = "Offers" >
      <div className="offer-left">
        <h1>PREMIUM</h1>
        <h1>Offers For You</h1>
        <p>Trending Products</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={ex_image} alt="Exclusive image" />
      </div>
    </div>
  )
}

export default Offers