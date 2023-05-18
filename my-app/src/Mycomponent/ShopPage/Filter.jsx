import React from "react";
import url from "../../assets/json.json";
import ShoesCard from "./Shoescard";
import { Button } from "react-bootstrap";

function Filter() {
  return (
    <div className="">
      <Button> 1$ to 100$ </Button>
      <h5> La tua Ricerca ha prodotto:</h5>
      {url
        .filter((shoe) => shoe.Price < 100)
        .map((shoe) => (
          <ShoesCard key={shoe.id} shoe={shoe} />
        ))}
    </div>
  );
}

export default Filter;
