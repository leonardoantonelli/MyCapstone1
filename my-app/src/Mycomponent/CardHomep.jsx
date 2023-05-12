import { Col, Row } from "react-bootstrap";

function CardHomep() {
  return (
    <>
      <Col className=" d-flex align-items-center justify-content-center">
        <div class="card">
          <div class="imgBx">
            <img src="http://placekitten.com/200" alt="" />
          </div>
          <div class="contentBx">
            <h2>Nike Shoes</h2>
            <div class="size">
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11.5</span>
            </div>
            <div class="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href="#">See More</a>
          </div>
        </div>
      </Col>
    </>
  );
}

export default CardHomep;
