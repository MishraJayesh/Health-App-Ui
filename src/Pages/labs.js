import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styling/labs.css";

const Labs = () => {
  const settings = {
    className: "service-carousel",
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
      <div className="service-container">
        <h1>Labs</h1>
        <Slider {...settings}>
          <div className="service-card">
            <img
              className="service-carousel-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmKs2Pvi5ceXcKXp_4-f9rbgY-a9Rco6JYNQ&usqp=CAU"
              alt="im"
            />
            <p>Get_Cure_Labs</p>
          </div>

          <div className="service-card">
            <img
              className="service-carousel-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnjntkyg8occonN07D7hZ-ITIzOEfUb2O_w&usqp=CAU"
              alt="im"
            />

            <p>Medi_Cure_Labs</p>
          </div>
          <div className="service-card">
            <img
              className="service-carousel-img"
              src="https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958363.jpg?w=2000"
              alt="im"
            />
            <p>Your_Doc_Labs</p>
          </div>
        </Slider>
      </div>
  );
};

export default Labs;
