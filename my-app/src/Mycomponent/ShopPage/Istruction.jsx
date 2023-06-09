import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./ShoeDetail.scss";
import imghp from "../../assets/shoe.png";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Instruction = () => {
  return (
    <>
      <Col className="position-relative " sm={12}>
        <div>
          <div className="path myBluBg position-absolute translate-middle dimensioni ">
            {" "}
          </div>{" "}
          <p
            className="position-absolute fw-bold
           pdimensione"
          >
            Clicca su dettaglio
          </p>{" "}
        </div>
        <div className="d-flex justify-content-center align-content-center">
          {" "}
          <img
            className="imghp"
            // src="../assets/png-transparent-hit-shoe-nike-designer-colorful-shoes-color-splash-sport-color-pencil.png"
            src={imghp}
            alt=""
          />{" "}
        </div>
      </Col>
    </>
  );
};

export default Instruction;
