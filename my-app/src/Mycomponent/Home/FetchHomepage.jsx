import { Row, Col } from "react-bootstrap/";
import url from "../../assets/json.json";
import CardHomep from "./CardHomep";
import "../../Mycomponent/Home/scss/CardHomepage.scss";
import "../../Mycolor.scss";
const FetchHomepage = () => {
  console.log(url);
  return (
    <Row>
      {" "}
      <h2 className="myTextWhite d-flex fw-bolder justify-content-center my-3 py-3">
        Le scarpe novita:
      </h2>
      {url.slice([20]).map((shoes) => {
        return (
          <Col
            className=" d-flex align-items-center justify-content-center mycontainer "
            xs={12}
            md={4}
            key={shoes.id}
          >
            <div class="mycard fade-in-bottom myshadow">
              <div class="myimgBx">
                <img className="myimg" fluid src={shoes.Img} alt="" />
              </div>
              <div class="mycontentBx">
                <h2>{shoes.Name}</h2>
                <h5>{shoes.Category}</h5>
                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <a href="#" className="my-2 py-2">
                  Buy Now
                </a>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default FetchHomepage;
