import "./CSS/ShopCatagory.css";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/items";

function ShopCatagory(props){
    const {all_product} = useContext(ShopContext);
    return (
        <div className="ShopCatagory">
            <img src={props.banner} alt="banners" />
            <div className="shopCatagory-indexes">
                <p>
                    <span>Showing 1 to 12</span> out of 36 Products
                </p>
                <div className="shopCatagory-sort">
                    Sort by <img src={dropdown} alt="sort" />
                </div>
            </div>
            <div className="ShopCatagory-Product">
                {all_product.map((items,key)=>{
                    if(items.category === props.catagory){
                        return < Items key={key} id={items.id} name={items.name} image={items.image} newPrice={items.new_price} oldPrice={items.old_price} />
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default ShopCatagory;