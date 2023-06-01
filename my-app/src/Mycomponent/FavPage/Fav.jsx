import { Col, Row, Button, ListGroup } from "react-bootstrap";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import AnimatedPage from "../Animationpage/AnimatedPage ";

const Fav = () => {
  const fav = useSelector((state) => state.fav.content);
  const dispatch = useDispatch();
  // cart sarà l'array contenuto in state.cart.content

  return (
    <AnimatedPage>
      <Row className="">
        <Col sm={12}>
          {fav.length > 0 ? (
            fav.map((shoe, i) => (
              <ListGroup.Item key={i}>
                <div className=" d-flex flex-column align-items-center ">
                  <img src={shoe.Img} alt="shoe selected" />
                  <h5>{shoe.Title} </h5>
                  <p> {shoe.Price} </p>
                </div>{" "}
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_FAV", payload: i });
                  }}
                >
                  <FaTrash />
                </Button>{" "}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item className=" ">
              <h4 className="myTextWhite m-3 p-2"> LA TUA WISHLIST È VUOTA</h4>
              <h5 className="myTextWhite m-3 p-2">
                {" "}
                Quando aggiungerai il primo prodotto al carrello, apparirà qui.
                Inizia ad esplorare!
              </h5>
              <Button className="myTextWhite m-3 p-2">Inizia</Button>
            </ListGroup.Item>
          )}
        </Col>
      </Row>
    </AnimatedPage>
  );
};

export default Fav;
