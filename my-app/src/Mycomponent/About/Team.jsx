import { Col, Container, Image, Row } from "react-bootstrap";
import AnimatedPage from "../Animationpage/AnimatedPage ";
import "./Abotuscss.scss";
import team from "../../assets/business-company-management-organization-team-png-favpng-wp3Q1b13bEzFLX4dVqdbsw478.png";
const Team = () => {
  return (
    <>
      {" "}
      <Row
        className="d-flex my-4 py-4
        "
      >
        {" "}
        <Col
          xs={12}
          lg={6}
          className="d-flex justify-content-center align-content-center "
        >
          <img className="w-100" src={team} alt="" />
        </Col>{" "}
        <Col className=" w-100 myTextWhite d-flex flex-column justify-content-center align-items-center ">
          <h3> Team Full</h3>
          <h5 className=" my-2 py-2">Lorem ipsum</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, id
            eum exercitationem, at quis sapiente, non voluptatibus voluptatum
            corporis est maiores aliquid numquam impedit. Alias ipsa odio ea
            eveniet perspiciatis.
          </p>
        </Col>{" "}
      </Row>
    </>
  );
};

export default Team;
