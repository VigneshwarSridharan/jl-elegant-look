"use client";
import Product from "@/components/Product";
import React from "react";
import Slider from "react-slick";

const RelatedProducts = ({ products }) => {
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
          {products.map(({ id, attributes: product }) => {
            return (
              <div className="px-15">
                <Product {...product} id={id} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProducts;
