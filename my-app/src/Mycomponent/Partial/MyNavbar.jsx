import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/adidas logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
      </BrowserRouter>
    </>
  );
}

export default MyNavbar;
