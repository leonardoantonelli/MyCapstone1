import { Row, Col } from "react-bootstrap/";
import imghp from "../../assets/shoe.png";
const Myinserzione = () => {
  return (
    <Row>
      <Col className="d-flex flex-column justify-content-center align-items-center ">
        <h2 className="d-flex myTextWhite  "> SHOP YOUR DREAM</h2>
        <h5 className="myTextBlu py-2"> SOTTOTITOLO</h5>
        <p className=" d-flex justify-content-center align-content-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          fugit dolores. Quas beatae nihil voluptates tempora quaerat. Aperiam
          rerum dolores veniam est quo commodi, soluta odio consequatur natus!
          Distinctio, unde!
        </p>
      </Col>
      <Col>
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
