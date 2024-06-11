"use client";
import React, { useEffect, useRef } from "react";

const Product = ({ id = 1 }) => {
  const productElm = useRef(null);

  useEffect(() => {
    if (productElm.current) {
      const height = productElm.current.clientHeight;
      productElm.current.addEventListener("mouseover", ({ currentTarget }) => {
        productElm.current.classList.add("hovered");
        productElm.current.style.height = `${height}px`;
      });
      productElm.current.addEventListener("mouseout", () => {
        productElm.current.classList.remove("hovered");
        productElm.current.style.height = null;
      });
    }
    return () => {
      if (productElm.current) {
        productElm.current.removeEventListener("mouseover", () => {});
        productElm.current.removeEventListener("mouseout", () => {});
      }
    };
  }, []);

  return (
    <div
      ref={productElm}
      className={`prd prd--style2 prd-labels--max prd-labels-shadow prd-w-lg `}
    >
      <div className="prd-inside">
        <div className="prd-img-area">
          <a
            href="product.html"
            className="prd-img image-hover-scale image-container"
            style={{ paddingBottom: "128.48%" }}
          >
            <img
              src={`/images/products/product-1.png`}
              alt="Leather Pegged Pants"
              className="js-prd-img fade-up ls-is-cached lazyloaded"
            />
            <div className="foxic-loader"></div>
            <div className="prd-big-squared-labels"></div>
          </a>
        </div>
        <div className="prd-info">
          <div className="prd-info-wrap">
            <div className="prd-tag">
              <a href="#">Wedding Dress</a>
            </div>
            <h2 className="prd-title">
              <a href="product.html">Leather Pegged Pants</a>
            </h2>
          </div>
          <div className="prd-hovers">
            <div className="prd-circle-labels"></div>
            <div className="prd-price">
              <div className="price-new">
                {(id * 500).toLocaleString("en-IN", {
                  maximumFractionDigits: 0,
                  style: "currency",
                  currency: "INR",
                })}
              </div>
            </div>
            <div className="prd-action">
              <div className="prd-action-left">
                <button className="btn js-prd-addtocart">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
