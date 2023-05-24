import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/adidas logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartIndicator from "./CartIndicator";
import Cart from "../ShopPage/Cart";
import MyMainHomepage from "../Home/MyMainHomepage";
import Shop from "../ShopPage/Shop";
import About from "../About/About";
function MyNavbar() {
  return (
    <>
      <BrowserRouter>
        {" "}
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
            <CartIndicator />{" "}
          </div>
        </Navbar>
        <hr className="myWhiteBg myTextWhite w-100 my-0 py-0" />
        <Routes>
          <Route path="/" element={<MyMainHomepage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/" element={<MyMainHomepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MyNavbar;
