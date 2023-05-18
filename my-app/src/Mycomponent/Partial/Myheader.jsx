import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../About/About";
import Shop from "../ShopPage/Shop";
import logo from "../../assets/adidas logo.png";
import MyNavbar from "./MyNavbar";
import MyMainHomepage from "../Home/MyMainHomepage";

function Myheader() {
  return (
    <>
      <MyNavbar />
      <BrowserRouter className=" ms-auto  text-decoration-none d-flex justify-content-center align-content-center ">
        <Routes>
          <Route path="/" element={<MyMainHomepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      <br />
    </>
  );
}

export default Myheader;
