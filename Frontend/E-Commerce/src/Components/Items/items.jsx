import React from "react";
import "./items.css";

function Items(props) {
  return (
    <div className = "Items" >
        <img src={props.image} alt="image" />
        <p>{props.name}</p>
        <div className="item-price">
            <div className="newPrice">
                $ {props.newPrice}
            </div>
            <div className="oldPrice">
                $ {props.oldPrice}
            </div>
        </div>
    </div>
  )
}

export default Items