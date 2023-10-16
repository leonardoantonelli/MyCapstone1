import { Col, Row, Button, ListGroup } from "react-bootstrap";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import AnimatedPage from "../Animationpage/AnimatedPage ";
import { useNavigate } from "react-router-dom";

const Fav = () => {
  const fav = useSelector((state) => state.fav.content);
  const dispatch = useDispatch();
  // cart sarà l'array contenuto in state.cart.content

  let navigate = useNavigate;
  const ButtonShop = () => {
    navigate("http://localhost:3000/shop");
  };
  return (
    <AnimatedPage>
      <Row className="">
        <Col sm={12} className="mb-5">
          <Col md={6} className="font-weight-bold mb-5 ms-3">
            {fav.length > 0 ? (
              fav.map((shoe, i) => (
                <Row
                  key={i}
                  className=" d-flex justify-content-center align-content-center my-3 py-3"
                >
                  <Col>
                    {" "}
                    <img
                      className="imgcart"
                      src={shoe.Img}
                      alt="shoe selected"
                    />{" "}
                  </Col>
                  <Col className=" d-flex flex-column justify-content-center align-content-center">
                    {" "}
                    <h5 className=" myTextWhite"> {shoe.Name}</h5>
                    <p className=" myTextWhite">{shoe.Price} $</p>
                  </Col>
                  <Col
                    s={1}
                    className="d-flex flex-column  justify-content-center "
                  >
                    {" "}
                    <Button
                      variant="danger"
                      className="d-flex flex-column widbutt  justify-content-center align-items-center"
                      onClick={() => {
                        dispatch({ type: "REMOVE_FROM_CART", payload: i });
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              ))
            ) : (
              <Row>
                <ListGroup.Item className="lead my-4 py-4 ">
                  <h4 className="myTextWhite"> IL TUO CARRELLO È VUOTO</h4>
                  <h5 className="myTextWhite">
                    {" "}
                    Quando aggiungerai il primo prodotto al carrello, apparirà
                    qui. Inizia ad esplorare!
                  </h5>
                  <Button onClick={ButtonShop()}>Inizia</Button>

                  <Row> </Row>
                </ListGroup.Item>
              </Row>
            )}
          </Col>
        </Col>
      </Row>
    </AnimatedPage>
  );
};

export default Fav;
