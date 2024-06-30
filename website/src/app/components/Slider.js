"use client";
import { getAsset } from "@/lib/utils/functions";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function SimpleSlider({ banners = [] }) {
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
          {banners.map((banner) => (
            <img src={getAsset(banner)} key={banner.id} alt="" />
          ))}
        </Slider>
      </div>
    </div>
  );
}

// export default Slider;
export default SimpleSlider;
