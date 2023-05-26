import { Col, Container, Image, Row } from "react-bootstrap";

import AnimatedPage from "../Animationpage/AnimatedPage ";
import "./Abotuscss.scss";
import fondator from "../../assets/bello-uomo-che-presenta-qualcosa.png";
import Fondator from "./Fondator";
import Team from "./Team";
const About = () => {
  return (
    <>
      <AnimatedPage>
        <Container>
          <Fondator></Fondator>
          <Team></Team>
        </Container>{" "}
      </AnimatedPage>
    </>
  );
};

export default About;
