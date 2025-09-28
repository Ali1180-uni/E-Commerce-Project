import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Shop from "./Pages/shop";
import ShopCatagory from "./Pages/shopCatagory";
import Product from "./Pages/product";
import LoginSignup from "./Pages/loginSignUp";
import Cart from "./Pages/cart";
import Footer from "./Components/Footer/footer"
import mens_banner from "./Components/Assets/banner_mens.png";
import womens_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}  />
            <Route path="/men" element={<ShopCatagory banner={mens_banner} catagory="men" />}  />
            <Route path="/women" element={<ShopCatagory banner={womens_banner} catagory="women" />}  />
            <Route path="/kids" element={<ShopCatagory banner={kids_banner} catagory="kid" />}  />
            <Route path="/product" element={<Product />}  >
              <Route path=":prductId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />}  />
            <Route path="/loginSignup" element={<LoginSignup />}  />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
