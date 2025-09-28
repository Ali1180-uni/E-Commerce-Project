import React from "react";
import Banner from '../Components/Banner/banner'
import Types from "../Components/Types/types";
import Offers from "../Components/Offers/offers";
import NewCollections from "../Components/newCollections/newCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";


function Shop(){
    return (
        <div>
            <Banner />
            <Types />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Shop;