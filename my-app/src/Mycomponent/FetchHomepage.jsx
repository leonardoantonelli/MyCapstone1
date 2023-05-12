import { Row, Col, Image } from "react-bootstrap/";
import url from "../assets/json.json";
import CardHomep from "./CardHomep";

const FetchHomepage = () => {
  console.log(url);
  return (
    <Row>
      {" "}
      <h2 className="myTextWhite d-flex fw-bolder justify-content-center my-3 py-3">
        Le scarpe novita:
      </h2>
      {url.slice([17]).map((shoes) => {
        return (
          <Col
            className=" d-flex align-items-center justify-content-center"
            xs={12}
            md={4}
            key={shoes.id}
          >
            <div class="card fade-in-bottom">
              <div class="imgBx">
                <img src={shoes.Image} alt="" />
              </div>
              <div class="contentBx">
                <h2>{shoes.Name}</h2>
                <h2>{shoes.Category}</h2>
                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
                <div class="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#">Buy Now</a>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default FetchHomepage;
