import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ShoesList from "./ShoesList";
import Shoescard from "./Shoescard";
import url from "../../assets/json.json";
import Filter from "./Filter";
import CartIndicator from "../Partial/CartIndicator";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
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
      <h1 className="d-flex justify-content-center align-content-center">
        {" "}
        Tutte le scarpe
      </h1>{" "}
      <Filter />
      <CartIndicator />
      <ShoesList
        // bookSelected={bookSelected}
        // changeBook={changeBook}
        shoes={shoes}
      />
    </>
  );
};

export default Shop;
