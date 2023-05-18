import { Col, Row } from "react-bootstrap";

function CardHomep(shoes) {
  return (
    <>
      <Col>
        <Col
          className=" d-flex align-items-center justify-content-center"
          xs={12}
          md={4}
          key={shoes.id}
        >
          <div class="card fade-in-bottom">
            <div class="imgBx">
              <img src={shoes.Img} alt="" />
            </div>
            <div class="contentBx">
              <h2>{shoes.Name}</h2>
              <h5>{shoes.Category}</h5>
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
      </Col>
    </>
  );
}

export default CardHomep;
