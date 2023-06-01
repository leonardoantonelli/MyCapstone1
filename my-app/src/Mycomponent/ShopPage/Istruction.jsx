import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./ShoeDetail.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Instruction = () => {
  return (
    <>
      <Col sm={12}>
        <h3 className="display-6">👈non hai cliccato nulla</h3>
      </Col>
    </>
  );
};

export default Instruction;
