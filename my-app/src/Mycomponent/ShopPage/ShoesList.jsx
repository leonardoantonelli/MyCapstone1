import Shoescard from "./Shoescard";
import url from "../../assets/json.json";
import { Col, Row } from "react-bootstrap";
const ShoesList = ({ shoes }) => (
  <Row className=" d-flex text-center justify-content-center   no-gutters">
    {url.map((shoe) => (
      <Col xs={10} md={4} lg={3} lg={2} className="d-flex no-gutters ">
        <Shoescard key={shoe.id} shoe={shoe} />
      </Col>
    ))}{" "}
  </Row>
);

export default ShoesList;
