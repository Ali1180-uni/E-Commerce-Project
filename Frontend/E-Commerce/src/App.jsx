import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Shop from "./Pages/shop";
import ShopCatagory from "./Pages/shopCatagory";
import Product from "./Pages/product";
import LoginSignup from "./Pages/loginSignUp";
import Cart from "./Pages/cart";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}  />
            <Route path="/men" element={<ShopCatagory catagory="men" />}  />
            <Route path="/women" element={<ShopCatagory catagory="women" />}  />
            <Route path="/kids" element={<ShopCatagory catagory="kids" />}  />
            <Route path="/product" element={<Product />}  >
              <Route path=":prductId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />}  />
            <Route path="/loginSignup" element={<LoginSignup />}  />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
