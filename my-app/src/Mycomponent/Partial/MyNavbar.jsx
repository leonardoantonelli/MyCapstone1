import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/adidas logo.png";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import CartIndicator from "./CartIndicator";
import Cart from "../ShopPage/Cart";
import MyMainHomepage from "../Home/MyMainHomepage";
import Shop from "../ShopPage/Shop";
import About from "../About/About";

import FavIndicator from "./FavIndicator";
import Fav2 from "../FavPage/Fav2";
import Fav from "../FavPage/Fav";
import LoginIndicator from "./LoginIndicator";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
function MyNavbar() {
  return (
    <>
      <BrowserRouter>
        <Navbar className="w-100 d-flex w-100 justify-content-between ">
          {" "}
          <Link to="/" className="text-decoration-none">
            <img src={logo} alt="" />
          </Link>{" "}
          <div className="d-flex text-right align-items-center  ">
            <Link to="/shop" className="text-decoration-none">
              <h5 className="text-decoration-none myTextWhite"> Shop</h5>
            </Link>{" "}
            <Link to="/about" className="text-decoration-none">
              <h5 className="text-decoration-none myTextWhite px-3 mx-3">
                {" "}
                About{" "}
              </h5>
            </Link>
            <CartIndicator />
            <FavIndicator />
            <Link to="/login" className="text-decoration-none">
              <h5 className="text-decoration-none myTextWhite px-3 mx-3">
                {" "}
                Login
              </h5>
            </Link>
            <Link to="/register" className="text-decoration-none">
              <h5 className="text-decoration-none myTextWhite px-3 mx-3">
                {" "}
                Register
              </h5>
            </Link>
          </div>
        </Navbar>
        <hr className="myWhiteBg myTextWhite w-100 my-0 py-0" />
        <Routes>
          <Route path="/" element={<MyMainHomepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/fav" element={<Fav2 />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MyNavbar;
