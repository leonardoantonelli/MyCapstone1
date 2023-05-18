import { Badge, Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

const ShoesCard = ({ shoe }) => {
  const shoeSelected = useSelector((state) => state.shoeSelected.content);
  const dispatch = useDispatch();

  return (
    <Card>
      <Card.Img variant="top" src={shoe.Img} />
      <Card.Body>
        <Card.Title>{shoe.Name}</Card.Title>
        <Button className="text-bg-dark border-0 ">{shoe.Tag} </Button>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Vai nel dettaglio </Button>
      </Card.Body>
    </Card>
  );
};

export default ShoesCard;
