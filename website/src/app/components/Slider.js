"use client";
import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="holder fullwidth full-nopad mt-0">
      <div className="container">
        <Slider {...settings}>
          <img src="https://source.unsplash.com/random/1920x700?fashion$1" />
          <img src="https://source.unsplash.com/random/1920x700?fashion$2" />
          <img src="https://source.unsplash.com/random/1920x700?fashion$3" />
          <img src="https://source.unsplash.com/random/1920x700?fashion$4" />
        </Slider>
      </div>
    </div>
  );
}

// export default Slider;
export default SimpleSlider;
