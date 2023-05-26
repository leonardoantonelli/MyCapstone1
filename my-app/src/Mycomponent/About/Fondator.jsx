import { Col, Container, Image, Row } from "react-bootstrap";

import AnimatedPage from "../Animationpage/AnimatedPage ";
import "./Abotuscss.scss";
import fondator from "../../assets/bello-uomo-che-presenta-qualcosa.png";
const Fondator = () => {
  return (
    <>
      {" "}
      <Row
        className="myBluBg myrounded-pill  d-flex my-3 py-3
        "
      >
        <Col
          xs={12}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mx-4 px-4"
        >
          <h3 className="myTextBlack"> Fondator & Ceo</h3>
          <h5 className=" my-2 py-2">Lorem ipsum</h5>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, id
            eum exercitationem, at quis sapiente, non voluptatibus voluptatum
            corporis est maiores aliquid numquam impedit. Alias ipsa odio ea
            eveniet perspiciatis.
          </p>
        </Col>{" "}
        <Col className=" d-flex justify-content-center align-content-center ">
          <img fluid className="imghp fluid w-50 " src={fondator} alt="" />
        </Col>{" "}
      </Row>
    </>
  );
};

export default Fondator;
