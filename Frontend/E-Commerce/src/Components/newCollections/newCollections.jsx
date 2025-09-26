import React from "react";
import "./NewCollection.css";
import new_collection from "../Assets/new_collections";
import Items from "../Items/items";

function NewCollections() {
  return (
    <div className = "NewCollections" >
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {new_collection.map((items,keyVar)=>{
                return < Items key={keyVar} id={items.id} name={items.name} image={items.image} newPrice={items.new_price} oldPrice={items.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections;