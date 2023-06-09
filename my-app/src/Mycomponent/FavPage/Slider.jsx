import React from "react";
import SlideCard from "./SlideCard";
import { Col, Row } from "react-bootstrap";

const Slider = () => {
  return (
    <>
      <Row className="d-md-none">
        <Col>
          <SlideCard />
        </Col>
      </Row>
    </>
  );
};

export default Slider;
