"use client";
import { getAsset } from "@/lib/utils/functions";
import { useRef } from "react";
import Slider from "react-slick";

const ProductImages = ({ cover, images = [] }) => {
  const mainPreviewSliderRef = useRef(null);
  const miniPreviewSliderRef = useRef(null);
  const handleBeforeChange = (prev, next) => {
    mainPreviewSliderRef.current.slickGoTo(next);
    miniPreviewSliderRef.current.slickGoTo(next);
  };
  const mainPreviewSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
  };
  const miniPreviewSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
  };
  return (
    <div className="aside-content">
      <div className="mb-2 js-prd-m-holder"></div>
      <div className="prd-block_main-image">
        <div className="prd-block_main-image-holder">
          <div className="product-main-carousel js-product-main-carousel ">
            <Slider {...mainPreviewSlider} ref={mainPreviewSliderRef}>
              <div className="prd-img">
                <img src={getAsset(cover)} alt="" />
              </div>
              {images.map((image, inx) => {
                return (
                  <div className="prd-img" key={inx}>
                    <img src={getAsset(image)} alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="product-previews-wrapper">
        <div className="product-previews-carousel js-product-previews-carousel slick-initialized">
          <Slider {...miniPreviewSlider} ref={miniPreviewSliderRef}>
            <div
              className="prd-img"
              onClick={() => {
                mainPreviewSliderRef.current.slickGoTo(0);
              }}
            >
              <img src={getAsset(cover)} alt="" />
            </div>
            {images.map((image, inx) => {
              return (
                <div
                  className="prd-img"
                  key={inx}
                  onClick={() => {
                    mainPreviewSliderRef.current.slickGoTo(inx + 1);
                  }}
                >
                  <img src={getAsset(image)} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
