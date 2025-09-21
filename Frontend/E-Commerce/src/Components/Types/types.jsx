import React from "react";
import "./types.css";
import data_product from "../Assets/data";
import Items from "../Items/items"

function Types() {
  return (
    <div className="Types">
      <h1>Trending in Women</h1>
      <hr />
      <div className="trending-items">
        {data_product.map((items,keyVar)=>{
            return < Items key={keyVar} id={items.id} name={items.name} image={items.image} newPrice={items.new_price} oldPrice={items.old_price} />
        })}
      </div>
    </div>
  );
}

export default Types;
