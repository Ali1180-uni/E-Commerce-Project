import React from "react";
import Banner from '../Components/Banner/banner'
import Types from "../Components/Types/types";
import Offers from "../Components/Offers/offers";
import NewCollections from "../Components/newCollections/newCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/footer";

function Shop(){
    return (
        <div>
            <Banner />
            <Types />
            <Offers />
            <NewCollections />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Shop;