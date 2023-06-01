import { Col, Container, Image, Row } from "react-bootstrap";

import AnimatedPage from "../Animationpage/AnimatedPage ";
import Myinserzione from "../Home/Myinserzione";
import FetchHomepage from "../Home/FetchHomepage";
import Video from "../Home/Video";
import Fav from "./Fav";

import Slider from "./Slider";
import SlideCard from "./SlideCard";

const Fav2 = () => {
  return (
    <>
      <Container>
        <Fav></Fav>
        <Row>
          <hr></hr>
          <SlideCard />
        </Row>
      </Container>
    </>
  );
};

export default Fav2;
