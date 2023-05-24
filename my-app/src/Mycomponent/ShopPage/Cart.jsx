import { Col, Row, Button, ListGroup } from "react-bootstrap";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import AnimatedPage from "../Animationpage/AnimatedPage ";

const Cart = () => {
  const cart = useSelector((state) => state.cart.content);
  const dispatch = useDispatch();
  // cart sarà l'array contenuto in state.cart.content

  return (
    <AnimatedPage>
      <Row>
        <Col sm={12} className="font-weight-bold mb-5 ms-3">
          TOTAL:{" "}
          <span className="display-6 text-primary">
            {cart
              .reduce(
                (accumulator, currentValue) =>
                  accumulator + parseFloat(currentValue.price),
                0
              )
              .toFixed(2)}
            €
          </span>
        </Col>
        <Col sm={12} className="mb-5">
          <ListGroup variant="flush">
            {cart.length > 0 ? (
              cart.map((shoe, i) => (
                <ListGroup.Item key={i}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: i });
                    }}
                  >
                    <FaTrash />
                  </Button>
                  <img src={shoe.Image} alt="shoe selected" />
                  {shoe.Title}
                  {shoe.Price}
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item className="lead ">
                <span className="text-primary opacity-50 fs-1 me-2">
                  {" "}
                  <FaShoppingCart />
                </span>
                Your cart is empty
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </AnimatedPage>
  );
};

export default Cart;
