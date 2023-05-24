import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ShoesList from "./ShoesList";
import Shoescard from "./Shoescard";
import url from "../../assets/json.json";
import Filter from "./Filter";
import CartIndicator from "../Partial/CartIndicator";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import MyModal from "./Mymodal";
import AnimatedPage from "../Animationpage/AnimatedPage ";
import { MySideBar } from "./MySidebar";
const Shop = () => {
  const [shoes, setShoes] = useState([]);
  // const [bookSelected, setBookSelected] = useState(null);

  useEffect(() => {
    getShoes();
  }, []);

  const getShoes = async () => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let fetchedBooks = await resp.json();
        setShoes(fetchedBooks);
        console.log(url);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const changeBook = book => setBookSelected(book);

  return (
    <>
      <AnimatedPage>
        <Container>
          <h1 className="d-flex justify-content-center align-content-center">
            {" "}
            Tutte le scarpe
          </h1>
          <Row>
            <Col md={2}>
              <MySideBar className=" d-sm-none "> </MySideBar>
            </Col>
            <Col>
              <ShoesList
                // shoeSelected={shoeSelected}
                // changeBook={changeBook}
                shoes={shoes}
              />
            </Col>{" "}
          </Row>
        </Container>
      </AnimatedPage>
    </>
  );
};

export default Shop;
