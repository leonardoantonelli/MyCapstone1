import { Badge, Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import MyModal from "./Mymodal";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ShoeDetail from "./ShoeDetail";

const ShoesCard = ({ shoe }) => {
  const shoeSelected = useSelector((state) => state.shoeSelected.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Funzione per navigare sulla pagina dettagli libro

  const goDetails = () => {
    navigate("/detail");
  };

  //funzione per avere il dispacth
  const handleDetails = () => {
    dispatch({ type: "SELECT_SHOE", payload: shoe });
  };

  return (
    <>
      <Card>
        <div className="cardcontainer">
          {" "}
          <Card.Img
            variant="top"
            src={shoe.Img}
            className="position-relative imghover"
          />{" "}
          <Button className="text-bg-dark border-3 position-absolute top-0 end-0 border-0">
            {shoe.Tag}{" "}
          </Button>
        </div>
        <Card.Body>
          <Card.Title className="fs-5 ">{shoe.Name}</Card.Title>

          <Button
            className={`${
              shoeSelected?.id === shoe.id ? "border-primary" : ""
            }`}
            variant="primary"
            onClick={() => dispatch({ type: "SELECT_SHOE", payload: shoe })}
          >
            Dettaglio
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ShoesCard;
