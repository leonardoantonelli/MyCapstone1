import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/adidas logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartIndicator from "./CartIndicator";
import Cart from "../ShopPage/Cart";
import MyMainHomepage from "../Home/MyMainHomepage";

function MyNavbar() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <Navbar
          bg="dark"
          variant="dark"
          className="w-100 d-flex ms-auto align-content-center"
        >
          {" "}
          <Link to="/" className="text-decoration-none">
            <div>
              <img src={logo} alt="" />
            </div>
          </Link>{" "}
          <Link to="/shop" className="text-decoration-none">
            <h5 className="text-decoration-none myTextWhite"> Shop</h5>
          </Link>{" "}
          <Link to="/about" className="text-decoration-none">
            <h5 className="text-decoration-none myTextWhite"> About </h5>
          </Link>
        </Navbar>{" "}
        <CartIndicator />
        <Routes>
          <Route path="/" element={<MyMainHomepage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MyNavbar;
