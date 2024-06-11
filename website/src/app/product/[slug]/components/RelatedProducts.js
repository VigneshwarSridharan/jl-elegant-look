"use client";
import Product from "@/components/Product";
import React from "react";
import Slider from "react-slick";

const RelatedProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="holder">
      <div className="container">
        <div className="title-wrap text-center">
          <h2 className="h1-style">You may also like</h2>
        </div>
        <Slider {...settings}>
          <div className="px-15">
            <Product id={1} />
          </div>
          <div className="px-15">
            <Product id={4} />
          </div>
          <div className="px-15">
            <Product id={3} />
          </div>
          <div className="px-15">
            <Product id={7} />
          </div>
          <div className="px-15">
            <Product id={5} />
          </div>
          <div className="px-15">
            <Product id={2} />
          </div>
          <div className="px-15">
            <Product id={6} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProducts;
