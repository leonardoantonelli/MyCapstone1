import Shoescard from "./Shoescard";
import url from "../../assets/json.json";
import { Col, Row } from "react-bootstrap";
import Searchbar from "./Searchbar";
const ShoesList = ({ shoes }) => (
  <>
    <Searchbar />
    <Row className=" d-flex text-center justify-content-center  d-flex flex-wrap">
      {url.map((shoe) => (
        <Col
          xs={10}
          md={4}
          lg={4}
          className="d-flex no-gutters align-items-center  justify-content-center my-3 d-flex flex-wrap "
        >
          <Shoescard key={shoe.id} shoe={shoe} />
        </Col>
      ))}{" "}
    </Row>
  </>
);

export default ShoesList;
