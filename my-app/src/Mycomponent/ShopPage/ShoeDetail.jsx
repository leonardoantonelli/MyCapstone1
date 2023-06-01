import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./ShoeDetail.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Instruction from "./Istruction";
import "../../Mycolor.scss";
const ShoeDetail = () => {
  const dispatch = useDispatch();
  const shoeSelected = useSelector((state) => state.shoeSelected.content);
  // useDispatch ci ritorna la funzione che avvierà, quando chiamata (con l'action), avvierà il processo di modifica dello Store

  return (
    <Row sticky="top" className="mt-3 mb-4 mb-lg-0 myBgShop d-flex myBgShop">
      {shoeSelected ? (
        <>
          {" "}
          <div classname="d-flex justify-content-center ">
            <h3 className=" d-flex justify-content-center myboldTitle fs-1 mt-3 ">
              {" "}
              {shoeSelected.Name}
            </h3>
          </div>
          <div className="position-relative">
            <img src={shoeSelected.Img} alt="" className="w-100" />
            <h6 className="position-absolute rotatebutton fs-1 fst-italic myboldSubTitle myTextBlu ">
              {shoeSelected.Tag}{" "}
            </h6>
            <div
              className="d-flex justify-content-center align-items-center
            position-absolute bottom-0 end-0"
            >
              <h3>{shoeSelected.Price} $</h3>{" "}
              <Button
                className="mybutton "
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", payload: shoeSelected });
                }}
              >
                {" "}
                <AiOutlineShoppingCart className="fs-3" />
              </Button>
            </div>
            <Button className="position-absolute top-0 end-0 myfav ">
              {" "}
              <AiOutlineHeart
                className="fs-3"
                onClick={() => {
                  dispatch({ type: "ADD_TO_FAV", payload: shoeSelected });
                }}
              />
            </Button>{" "}
            <div class="size d-flex justify-content-center align-items-center position-absolute bottom-0 start-0">
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
          </div>
        </>
      ) : (
        <Row>
          <Instruction />
        </Row>
      )}
    </Row>
  );
};

export default ShoeDetail;
