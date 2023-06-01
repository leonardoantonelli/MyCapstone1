import React from "react";
import Sdata from "../../assets/json.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from "react-bootstrap";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Row lg={2}>
        <Slider className="myBgShop" {...settings}>
          {Sdata.map((value, index) => {
            return (
              <>
                <div className=" d-flex" key={index}>
                  <Col className=" d-flex flex-column align-content-center justify-content-center">
                    <h2 className="myTextBlack fw-bold">{value.Name}</h2>
                    <h4 className="myTextBlu fw-bold ">{value.Type} </h4>
                    <p className="myTextBlu fw-semibold fa-2">{value.Tag}</p>
                    <p className="myTextGrey fw-bold"> {value.Price} $</p>
                    <h3> Visit Collections</h3>
                  </Col>
                  <Col className="right">
                    <img className=" imgslider" src={value.Img} alt="" />
                  </Col>
                </div>
              </>
            );
          })}
        </Slider>
        <Col className="d-flex flex-column align-items-center justify-content-center px-5">
          {" "}
          <h4 className=" myTextAzzure fw-bolder"> Scorri per vedere</h4>
          <p className="fw-light myTextBlu "> Lorem ipsum</p>
          <p className="myTextWhite px-5 mx-5 align-content-center justify-content-center text-center">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            recusandae suscipit obcaecati neque nemo reiciendis debitis optio
            nisi quod? In quo eaque rem quos fuga tenetur architecto qui!
            Perferendis, nemo!{" "}
          </p>
        </Col>
      </Row>
    </>
  );
};

export default SlideCard;
