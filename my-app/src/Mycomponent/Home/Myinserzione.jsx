import { Row, Col } from "react-bootstrap/";
import imghp from "../../assets/shoe.png";
import "../../Mycolor.scss";
const Myinserzione = () => {
  return (
    <Row className="height-wh">
      <Col
        xs={12}
        lg={4}
        className="d-flex flex-column justify-content-center align-items-center mx-5 px-5 "
      >
        <h1 className="d-flex myboldTitle myTextWhite justify-content-center text-center align-items-center ">
          {" "}
          SHOP YOUR DREAM
        </h1>
        <h5 className=" py-2 myboldSubTitle myTextYellow"> SOTTOTITOLO</h5>
        <p className=" d-flex justify-content-center align-content-center myTextWhite ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          fugit dolores. Quas beatae nihil voluptates tempora quaerat. Aperiam
          rerum dolores veniam est quo commodi, soluta odio consequatur natus!
          Distinctio, unde!
        </p>
      </Col>
      <Col className=" d-flex justify-content-center align-content-center ">
        <img
          className="imghp"
          // src="../assets/png-transparent-hit-shoe-nike-designer-colorful-shoes-color-splash-sport-color-pencil.png"
          src={imghp}
          alt=""
        />
      </Col>
    </Row>
  );
};

export default Myinserzione;
